import { ICreateProductDto } from '@ecommerce/types';
import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput implements ICreateProductDto {
  @Field(() => String, { description: 'Product title' })
  title: string;
  @Field(() => String, { description: 'Product image' })
  image: string;
  @Field(() => String, { description: 'Product description' })
  description: string;
  @Field(() => Int, { description: 'Product amount' })
  amount: number;
  @Field(() => String, { description: 'Product manufacturer ID' })
  manufacturerId: string;

  @Field(() => Int, { description: 'Product price' })
  price: number;
}
