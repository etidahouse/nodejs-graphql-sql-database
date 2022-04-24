import { Player } from 'src/types/player';
import { default as playerType } from '../types/player';
import context from '../../context';
import { GraphQLList } from 'graphql';

const players = {
    type: new GraphQLList(playerType),
    resolve: (): Promise<Player[] | null> => {
        return context.repositories.player.getAll();
  },
};

export default players; 