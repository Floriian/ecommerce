import { Module } from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';
import { ManufacturerResolver } from './manufacturer.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Manufacturer, ManufacturerSchema } from './model/manufacturer.model';

@Module({
  providers: [ManufacturerResolver, ManufacturerService],
  imports: [
    MongooseModule.forFeature([
      {
        schema: ManufacturerSchema,
        name: Manufacturer.name,
      },
    ]),
  ],
})
export class ManufacturerModule {}
