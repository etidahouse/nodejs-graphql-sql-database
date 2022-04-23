import PlayerKnexRepository from 'src/repositories/player-repository-knex';
import Context from './context';

const context: Context = {
  repositories: {
    player: new PlayerKnexRepository(),
  },
};

export default context;