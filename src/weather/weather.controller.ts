import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { WeatherService } from './weather.service';
import { WeatherGetDto } from './dto/weather.get.dto';

@UseGuards(AuthGuard)
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  async get(@Query() dto: WeatherGetDto) {
    return this.weatherService.get(dto);
  }
}
