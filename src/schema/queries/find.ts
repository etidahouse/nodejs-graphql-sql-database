import { GraphQLList, GraphQLString } from 'graphql';
import { Player } from '../../types/player';
import { default as playerType } from '../types/player';
import { FindParameters } from 'src/repositories/player-repository';
import context from '../../context/';


const find = {
    type: new GraphQLList(playerType),
    args: {
          firstName: {
            type: GraphQLString,
          },
          lastName: {
            type: GraphQLString,
          },
      },
    resolve: (_: any, args: FindParameters): Promise<Player[]> => {
      return context.repositories.player.find(args).then(res => res);
  },
};

export default find; 