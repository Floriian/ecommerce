import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Manufacturer {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
    default: 0,
  })
  productsLength: number;
}

export type ManufacturerDocument = HydratedDocument<Manufacturer>;
export const ManufacturerSchema = SchemaFactory.createForClass(Manufacturer);
