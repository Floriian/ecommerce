import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Manufacturer {
  @Field(() => String, { description: 'Manufacturer name' })
  name: string;
}
