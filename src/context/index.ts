import PlayerKnexRepository from '../dao/player';
import Context from './context';

const context: Context = {
  repositories: {
    player: new PlayerKnexRepository(),
  },
};

export default context;