import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './entities/product.entity';
import { ManufacturerModule } from '../manufacturer/manufacturer.module';

@Module({
  providers: [ProductsResolver, ProductsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),
    ManufacturerModule,
  ],
})
export class ProductsModule {}
