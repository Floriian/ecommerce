import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { configModuleOptions } from './config/config';
import { graphQLConfig } from './config/graphql';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    GraphQLModule.forRoot<ApolloDriverConfig>(graphQLConfig),
    ProductsModule,
  ],
})
export class AppModule {}
