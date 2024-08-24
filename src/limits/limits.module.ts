import { Module } from '@nestjs/common';
import { LimitsService } from './limits.service';
import { limitsProviders } from './limits.providers';
import { AuthModule } from '../auth/auth.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [AuthModule, DatabaseModule],
  providers: [...limitsProviders, LimitsService],
  exports: [LimitsService],
})
export class LimitsModule {}
