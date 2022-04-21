import Player from 'src/entities/player';
import { default as playerType } from '../types/player';

const player = {
  type: playerType,
  resolve: (): Player => {
    return {
      id: -1,
      lastname: "Doe",
      firstname: "John",
    };
  },
};

export default player;