
import { GraphQLNonNull } from 'graphql';
//import { CreateParameters } from 'src/repositories/player-repository';
import newPlayer from '../../types/input/new-player';
import { Player } from '../../types/player';
import context from '../../context';
import { default as playerType } from '../types/player';
import { CreateParameters } from 'src/repositories/player-repository';

const createPlayer = {
  type: playerType,
  args: {
    newPlayer: {
      type: new GraphQLNonNull(newPlayer),
    },
  },
  resolve: (_: any, input: any): Promise<Player> => {
    let player: CreateParameters = {
        firstName: input.newPlayer.firstName,
        lastName: input.newPlayer.lastName
    }
    return context.repositories.player.create(player);
  },
};

export default createPlayer;