import { Player } from "src/types/player";

export interface CreateParameters {
    firstName: string;
    lastName: string;
  }
  
  export interface FindParameters {
    firstName?: string;
    lastName?: string;
  }
  
  export interface CountParameters {
    firstName?: string;
    lastName?: string;
  }
  
  export default interface PlayerRepository {
    get(id: number): Promise<Player>;
  
    getAll(): Promise<Player[]>;
  
    create(params: CreateParameters): Promise<Player>;
  
    update(player: Player): Promise<Player>;
  
    find(params: FindParameters): Promise<Player[]>;
  
    count(params: CountParameters): Promise<number>;
  
    delete(id: number): Promise<Player>;
  }