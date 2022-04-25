import { GraphQLID, GraphQLNonNull } from 'graphql';
import { Player } from 'src/types/player';
import { default as playerType } from '../types/player';
import context from '../../context';

const deletePlayer = {
    type: playerType,
    args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
    resolve: (_: any, args: Player): Promise<void> => {
      return context.repositories.player.delete(args.id);
  },
};

export default deletePlayer; 