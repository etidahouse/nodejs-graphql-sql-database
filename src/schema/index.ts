import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import hello from './queries/hello';
import player from './queries/player';
import players from './queries/players';
import find from './queries/find'
import count from './queries/count';

const query = new GraphQLObjectType({
    name: 'Query',
    fields: (): any => ({
      hello,
      player,
      players,
      find,
      count
    }),
  });

export default new GraphQLSchema({
  query,
});