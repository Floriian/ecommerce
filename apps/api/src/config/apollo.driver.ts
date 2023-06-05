import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
export const apolloConfig: ApolloDriverConfig = {
  driver: ApolloDriver,
  playground: true,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
};
