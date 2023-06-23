import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('topic')
export class Topic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;
}
