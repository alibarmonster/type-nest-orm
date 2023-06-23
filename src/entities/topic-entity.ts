import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Comment } from './comment-entity';

@Entity('topics')
export class Topic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany(() => Comment, (comment) => comment.topic)
  comments: Comment[];
}
