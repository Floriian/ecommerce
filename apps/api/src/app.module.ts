import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { configModuleOptions } from './config/config';
import { graphQLConfig } from './config/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseOptions } from './config/mongoose';
import { ManufacturerModule } from './manufacturer/manufacturer.module';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    GraphQLModule.forRoot<ApolloDriverConfig>(graphQLConfig),
    MongooseModule.forRootAsync(mongooseOptions),
    ProductsModule,
    ManufacturerModule,
  ],
})
export class AppModule {}
