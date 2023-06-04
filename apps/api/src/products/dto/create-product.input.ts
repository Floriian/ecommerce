import { InputType, Field } from '@nestjs/graphql';
import { ICreateProductDto } from '@ecommerce/types';
@InputType()
export class CreateProductInput implements ICreateProductDto {
  @Field(() => String, { description: 'Product title' })
  title: string;
  @Field(() => String, { description: 'Product image direct link' })
  image: string;
  @Field(() => String, { description: 'Product description' })
  description: string;
}
