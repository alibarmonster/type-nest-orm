import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Topic } from './topic-entity';
import { User } from './user-entity';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;

  @ManyToOne(() => Topic, (topic) => topic.comments)
  topic: Topic;
}
