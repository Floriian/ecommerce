import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { apolloConfig, mongooseConfig } from './config';
import { ManufacturerModule } from './manufacturer/manufacturer.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRootAsync(mongooseConfig),
    GraphQLModule.forRoot(apolloConfig),
    ManufacturerModule,
    ProductsModule,
  ],
})
export class AppModule {}
