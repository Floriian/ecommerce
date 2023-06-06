import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateManufacturerInput {
  @Field(() => String, { description: "Manufacturer's name" })
  name: string;

  @Field(() => String, { description: 'Manufacturer image.' })
  image: string;
}
