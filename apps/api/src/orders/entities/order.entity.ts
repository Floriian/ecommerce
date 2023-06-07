import { CreateOrderDto } from '@ecommerce/types';
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Product } from '../../products/entities/product.entity';

@Schema()
@ObjectType()
export class Order implements Omit<CreateOrderDto, 'products'> {
  @Field(() => String, { description: 'Order ID' })
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  @Field(() => String, { description: 'Order total price' })
  totalPrice: number;

  @Prop({ default: Date.now() })
  @Field(() => Date, { description: 'Order created at' })
  orderCreatedAt: Date;

  @Prop({ default: false })
  @Field(() => Boolean, { description: 'Is order accepted' })
  orderAccepted: boolean;

  @Prop({
    default: false,
    ref: Product.name,
    type: mongoose.Schema.Types.ObjectId,
  })
  @Field(() => [Product], { description: 'Order products' })
  products: Product[];
}

export type OrderDocument = HydratedDocument<Order>;
export const OrderSchema = SchemaFactory.createForClass(Order);
