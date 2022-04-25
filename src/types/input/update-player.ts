import {
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
} from 'graphql';

const updatePlayer = new GraphQLInputObjectType({
    name: 'UpdatePlayer',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        firstName: {
            type: new GraphQLNonNull(GraphQLString),
        },
        lastName: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
});

export default updatePlayer;