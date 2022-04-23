import { GraphQLID, GraphQLNonNull } from 'graphql';
import { get } from 'src/dao/player';
import { Player } from 'src/types/player';
import { default as playerType } from '../types/player';

const player = {
    type: playerType,
    args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
    resolve: (_: any, args: Player): Promise<Player | null> => {
      /*return {
        id: id,
        lastname: "Doe",
        firstname: "John",
      };*/
      return get(args.id);
      //return context.repositories.player.get(args.id);
  },
};

export default player; 