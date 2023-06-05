import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
@ObjectType()
export class Manufacturer {
  @Prop({ required: true })
  @Field(() => String, { description: 'Manufacturer name' })
  name: string;
}
export type ManufacturerDocument = HydratedDocument<Manufacturer>;
export const ManufacturerSchema = SchemaFactory.createForClass(Manufacturer);
