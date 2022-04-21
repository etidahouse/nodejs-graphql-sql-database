import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import Player from 'src/entities/player';

const player = new GraphQLObjectType({
  name: 'Player',
  fields: () => ({
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Last name of the player',
      resolve: (p: Player): string => {
        return p.lastname;
      }
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'First name of the player',
      resolve: (p: Player): string => {
        return p.firstname;
      },
    }
  })
});

export default player; 