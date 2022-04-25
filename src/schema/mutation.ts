import { GraphQLObjectType } from 'graphql';
import createPlayer from './mutations/create'

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: (): any => ({
    createPlayer
  }),
});

export default mutation;