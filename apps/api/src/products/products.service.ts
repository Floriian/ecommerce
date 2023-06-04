import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './models/product.model';
import { Model } from 'mongoose';
@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}
  async create(createProductInput: CreateProductInput): Promise<Product> {
    const { description, image, title } = createProductInput;
    const product = await this.productModel.create({
      description,
      image,
      title,
    });
    await product.save();
    return product;
  }

  async findAll() {
    return await this.productModel.find();
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
