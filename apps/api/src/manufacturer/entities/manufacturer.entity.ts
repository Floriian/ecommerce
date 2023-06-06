import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

@Schema()
@ObjectType()
export class Manufacturer {
  @Field(() => String, { description: 'Manufacturer ID.' })
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  @Field(() => String, { description: 'Manufacturer name' })
  name: string;

  @Prop({ required: true })
  @Field(() => String, { description: 'Manufacturer image' })
  image: string;
}
export type ManufacturerDocument = HydratedDocument<Manufacturer>;
export const ManufacturerSchema = SchemaFactory.createForClass(Manufacturer);
