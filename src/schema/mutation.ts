import { GraphQLObjectType } from 'graphql';
import createPlayer from './mutations/create'
import updatePlayer from './mutations/update';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: (): any => ({
    createPlayer,
    updatePlayer
  }),
});

export default mutation;