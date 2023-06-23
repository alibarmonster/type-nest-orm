import { User, Topic, Comment } from './src/entities';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'typepost',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  entities: [User, Topic, Comment],
  synchronize: true,
};

export default config;
