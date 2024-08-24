import { Controller, Get, UseGuards } from '@nestjs/common';
import { LimitsService } from './limits.service';
import { AuthGuard } from '../auth/auth.guard';
import { AuthDecorator } from '../shared/decorators/auth.decorator';
import { AuthInfoDto } from '../shared/dto/auth.info.dto';

@UseGuards(AuthGuard)
@Controller('limits')
export class LimitController {
  constructor(private readonly limitsService: LimitsService) {}

  @Get()
  async get(@AuthDecorator() auth: AuthInfoDto) {
    return this.limitsService.getLimit(auth);
  }
}
