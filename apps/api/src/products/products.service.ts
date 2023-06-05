import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
