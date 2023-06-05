import { Module } from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';
import { ManufacturerResolver } from './manufacturer.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Manufacturer,
  ManufacturerSchema,
} from './entities/manufacturer.entity';

@Module({
  providers: [ManufacturerResolver, ManufacturerService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Manufacturer.name,
        schema: ManufacturerSchema,
      },
    ]),
  ],
  exports: [ManufacturerService],
})
export class ManufacturerModule {}
