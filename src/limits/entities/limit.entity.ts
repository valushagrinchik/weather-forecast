import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { LimitType } from '../limitType.enum';

@Entity()
export class Limit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: LimitType,
    default: LimitType.WEATHER,
  })
  type: LimitType;

  @Column()
  limit: number;
}
