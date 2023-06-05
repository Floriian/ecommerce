import { ObjectType, Field } from '@nestjs/graphql';
import { Manufacturer } from '../../manufacturer/entities/manufacturer.entity';
@ObjectType()
export class Product {
  @Field(() => String, { description: 'Product title' })
  title: string;
  @Field(() => String, { description: 'Product image direct link' })
  image: string;
  @Field(() => String, { description: 'Product description' })
  description: string;

  @Field(() => String, { description: 'Product name' })
  name: string;

  @Field(() => Manufacturer, { description: 'Product manufacturer' })
  manufacturer: Manufacturer;
}
