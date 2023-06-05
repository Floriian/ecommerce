import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';
import { ManufacturerService } from '../manufacturer/manufacturer.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
    private readonly manufacturerService: ManufacturerService,
  ) {}
  async create(createProductInput: CreateProductInput): Promise<Product> {
    const manufacturer = await this.manufacturerService.findOne(
      createProductInput.manufacturerId,
    );

    const product = await this.productModel.create({
      ...createProductInput,
      manufacturer,
    });

    await product.save();
    return product;
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find().populate('manufacturer');
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productModel
      .findById(id)
      .populate('manufacturer');

    if (!product) {
      throw new NotFoundException("This product doesn't exists.");
    }

    return product;
  }

  async update(
    id: string,
    updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    await this.findOne(id);
    const manufacturer = await this.manufacturerService.findOne(
      updateProductInput.manufacturerId,
    );
    const update = await this.productModel.findByIdAndUpdate(id, {
      $set: {
        ...updateProductInput,
        ...manufacturer,
      },
    });

    return update;
  }

  async remove(id: string): Promise<{ success: boolean }> {
    await this.findOne(id);
    const del = await this.productModel.findByIdAndDelete(id);
    if (!del) return { success: false };
    return {
      success: true,
    };
  }
}
