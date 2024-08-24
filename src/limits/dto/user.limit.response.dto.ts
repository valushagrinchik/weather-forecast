import { LimitType } from '../limitType.enum';

export class UserLimitResponseDto {
  limitType: LimitType;
  limit: number;
  count: number;

  constructor(data: Partial<UserLimitResponseDto>) {
    Object.assign(this, data);
  }
}
