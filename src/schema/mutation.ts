import { GraphQLObjectType } from 'graphql';
import createPlayer from './mutations/create'
import updatePlayer from './mutations/update';
import deletePlayer from './mutations/delete';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: (): any => ({
    createPlayer,
    updatePlayer,
    deletePlayer
  }),
});

export default mutation;