import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { WeatherModule } from './weather/weather.module';
import { LimitsModule } from './limits/limits.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV == 'test' ? '.env.test' : '.env',
      isGlobal: true,
    }),
    AuthModule,
    WeatherModule,
    LimitsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
