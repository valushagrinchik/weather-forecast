import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Weather } from './entities/weather.entity';
import { WeatherGetDto } from './dto/weather.get.dto';

@Injectable()
export class WeatherService {
  constructor(
    @InjectRepository(Weather)
    private weatherRepository: Repository<Weather>,
  ) {}

  get(dto: WeatherGetDto) {
    return dto;
  }
}
