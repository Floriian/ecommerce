import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';

export const mongooseConfig: MongooseModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    // uri: configService.get('MONGODB_URI'),
    uri: 'mongodb://ecommerce_user:ecommerce_user@localhost:27017/ecommerce_database?authMechanism=DEFAULT&authSource=admin',
  }),
};
