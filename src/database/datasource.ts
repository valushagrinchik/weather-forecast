import { ConfigService } from '@nestjs/config';
import { Limit } from '../limits/entities/limit.entity';
import { UserLimit } from '../limits/entities/user.limit.entity';
import { User } from '../users/entities/user.entity';
import { DataSource } from 'typeorm';

const datasource = (configService: ConfigService) => {
    console.log( configService.get<string>('DB_HOST'),'DB_HOST')
    return   new DataSource({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: +configService.get<string>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [User, Limit, UserLimit],
        migrations: ['db/_migrations/*.ts'],
        migrationsTableName: '_migrations',
      });
}



export default datasource;
