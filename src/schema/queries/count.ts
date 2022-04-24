import { Player } from 'src/types/player';
import context from '../../context';
import { GraphQLInt, GraphQLString } from 'graphql';

const count = {
    type: GraphQLInt,
    args: {
        firstName: {
            type: GraphQLString,
          },
          lastName: {
            type: GraphQLString,
          },
      },
    resolve: (_: any, args: Player): Promise<number | null> => {
        let i = context.repositories.player.count(args);
        console.log(i);
        return i;
  },
};

export default count; 