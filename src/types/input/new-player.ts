import {
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
  } from 'graphql';
  
  const newPlayer = new GraphQLInputObjectType({
    name: 'NewPlayer',
    fields: {
      firstName: {
        type: new GraphQLNonNull(GraphQLString),
      },
      lastName: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
  });
  
  export default newPlayer;