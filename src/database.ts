import { knex } from 'knex';
import config from './config';

export const database = knex({
  client: 'pg',
  ...config.database,
  pool: { min: 0, max: 7 },
});
