import { GraphQLID, GraphQLNonNull } from 'graphql';
import { Player } from 'src/types/player';
import { default as playerType } from '../types/player';
import context from '../../context';

const player = {
    type: playerType,
    args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
    resolve: (_: any, args: Player): Promise<Player | null> => {
      return context.repositories.player.get(args.id);
  },
};

export default player; 