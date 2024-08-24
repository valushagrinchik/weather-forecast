import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Weather {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city: string;

  @Column()
  temperature: string;
}
