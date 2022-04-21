import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import player from './queries/players';
import hello from './queries/hello';

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