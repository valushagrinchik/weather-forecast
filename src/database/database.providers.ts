import { ConfigModule, ConfigService } from '@nestjs/config';
import datasource from './datasource';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const dataSource = datasource(configService);

      return dataSource.initialize();
    },
  },
];
