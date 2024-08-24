import { DataSource } from 'typeorm';
import { Limit } from './entities/limit.entity';
import { UserLimit } from './entities/user.limit.entity';

export const limitsProviders = [
  {
    provide: 'LIMITS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Limit),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'USER_LIMITS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserLimit),
    inject: ['DATA_SOURCE'],
  },
];
