import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import hello from './queries/hello';
import player from './queries/player';

const query = new GraphQLObjectType({
    name: 'Query',
    fields: (): any => ({
      hello,
      player
    }),
  });

export default new GraphQLSchema({
  query,
});