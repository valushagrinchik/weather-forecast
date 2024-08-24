import { UserLimit } from '../../limits/entities/user.limit.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => UserLimit, (limit) => limit.user)
  limits: UserLimit[];
}
