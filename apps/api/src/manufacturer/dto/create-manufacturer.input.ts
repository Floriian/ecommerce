import { Field, InputType } from '@nestjs/graphql';
import { ICreateManufacturerDto } from '@ecommerce/types';
@InputType()
export class CreateManufacturerInput implements ICreateManufacturerDto {
  @Field(() => String, { description: 'Manufacturer name' })
  name: string;
}
