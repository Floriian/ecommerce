import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseConfig } from './config';

@Module({
  imports: [MongooseModule.forRootAsync(mongooseConfig)],
})
export class AppModule {}
