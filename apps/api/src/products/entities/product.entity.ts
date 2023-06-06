import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ICreateProductDto } from '@ecommerce/types';
import { Manufacturer } from '../../manufacturer/entities/manufacturer.entity';
import mongoose, { HydratedDocument } from 'mongoose';
@Schema()
@ObjectType()
export class Product implements ICreateProductDto {
  @Field(() => String, { description: 'Product ID' })
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  @Field(() => String, { description: 'Product title' })
  title: string;

  @Prop({ required: false, default: '' })
  @Field(() => String, { description: 'Product image' })
  image: string;

  @Prop({ required: true })
  @Field(() => String, { description: 'Product description' })
  description: string;

  @Prop({ required: false, default: 0 })
  @Field(() => Int, { description: 'Product amount' })
  amount: number;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: Manufacturer.name,
  })
  @Field(() => Manufacturer, { description: 'Product manufacturer' })
  manufacturer: Manufacturer;
}
export type ProductDocument = HydratedDocument<Product>;
export const ProductSchema = SchemaFactory.createForClass(Product);
