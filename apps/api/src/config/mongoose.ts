import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';

export const mongooseOptions: MongooseModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    //TODO from env
    uri: 'mongodb://ecommerce_user:ecommerce_user@localhost:27017/ecommerce_database?authMechanism=DEFAULT&authSource=admin',
  }),
};
