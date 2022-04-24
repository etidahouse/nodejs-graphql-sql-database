import { Player } from 'src/types/player';
import { default as playerType } from '../types/player';
import context from '../../context';
import { GraphQLList } from 'graphql';

const players = {
    type: new GraphQLList(playerType),
    resolve: async (): Promise<Player[] | null> => {
        console.log("hellow")
        const p = await context.repositories.player.getAll();
        console.log(p);
        console.log("can u wait ?")
        return p;
  },
};

export default players; 