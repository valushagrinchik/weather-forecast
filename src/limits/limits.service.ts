import { Inject, Injectable } from '@nestjs/common';
import { Limit } from './entities/limit.entity';
import { Repository } from 'typeorm';
import { UserLimit } from './entities/user.limit.entity';
import { LimitType } from './limitType.enum';
import { UserLimitResponseDto } from './dto/user.limit.response.dto';
import { AuthInfoDto } from '../shared/dto/auth.info.dto';

@Injectable()
export class LimitsService {
  constructor(
    @Inject('LIMITS_REPOSITORY')
    private limitsRepository: Repository<Limit>,
    @Inject('USER_LIMITS_REPOSITORY')
    private userLimitsRepository: Repository<UserLimit>,
  ) {}

  async getLimit(auth: AuthInfoDto) {
    const weatherLimit = await this.limitsRepository.findOne({
      where: {
        type: LimitType.WEATHER,
      },
    });
    const userWeatherLimit = await this.userLimitsRepository.findOne({
      where: {
        userId: auth.id,
        limitId: weatherLimit.id,
      },
    });

    return new UserLimitResponseDto({
      limitType: weatherLimit.type,
      limit: weatherLimit.limit,
      count: userWeatherLimit.count,
    });
  }
}
