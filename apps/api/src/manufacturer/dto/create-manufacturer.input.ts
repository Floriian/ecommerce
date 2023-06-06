import { CreateManufacturerDto } from '@ecommerce/types';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateManufacturerInput implements CreateManufacturerDto {
  @Field(() => String, { description: "Manufacturer's name" })
  name: string;

  @Field(() => String, { description: 'Manufacturer image.' })
  image: string;
}
