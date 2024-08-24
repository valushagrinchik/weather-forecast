import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth.login.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(dto: AuthLoginDto) {
    const user = await this.usersService.findOneByEmail(dto.email);
    if (user?.password !== dto.password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
