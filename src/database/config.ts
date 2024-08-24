import { config } from 'dotenv';

config({
  path: process.env.DOCKER ? '.env.docker' : '.env',
});

import { ConfigService } from '@nestjs/config';
import datasource from './datasource';

const configService = new ConfigService();
const ds = datasource(configService);

export default ds;
