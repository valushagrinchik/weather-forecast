import { User } from '../../users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import { Limit } from './limit.entity';

@Entity()
export class UserLimit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @ManyToOne(() => User)
  user: User;

  @Column()
  limitId: number;

  @OneToOne(() => Limit)
  limit: Limit;

  @Column()
  count: number;
}
