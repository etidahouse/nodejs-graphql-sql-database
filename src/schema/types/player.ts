import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

import { Player } from 'src/types/player';

const player = new GraphQLObjectType({
  name: 'Player',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Database id of the player',
      resolve: (p: Player): number => {
        return p.id;
      }
    },
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