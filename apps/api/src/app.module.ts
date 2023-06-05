import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { apolloConfig, mongooseConfig } from './config';
import { ManufacturerModule } from './manufacturer/manufacturer.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    MongooseModule.forRootAsync(mongooseConfig),
    GraphQLModule.forRoot(apolloConfig),
    ManufacturerModule,
  ],
})
export class AppModule {}
