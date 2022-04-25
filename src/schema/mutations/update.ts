
import { GraphQLNonNull } from 'graphql';
import { Player } from '../../types/player';
import context from '../../context';
import { default as playerType } from '../types/player';
import { default as updatePlayerType } from '../../types/input/update-player';

const updatePlayer = {
    type: playerType,
    args: {
        player: {
            type: new GraphQLNonNull(updatePlayerType),
        },
    },
    resolve: (_: any, input: any): Promise<Player> => {
        let player: Player = {
            id: input.player.id,
            firstName: input.player.firstName,
            lastName: input.player.lastName
        }
        return context.repositories.player.update(player);
    },
};

export default updatePlayer;