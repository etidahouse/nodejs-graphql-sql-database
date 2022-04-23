import { OrderBy } from "src/types/order-by";
import { Player } from "src/types/player";

export interface CreateParameters {
    firstName: string;
    lastName: string;
  }
  
  export interface FindParameters {
    first: number;
    after?: number;
    firstName?: string;
    lastName?: string;
    orderBy?: OrderBy[];
  }
  
  export interface CountParameters {
    firstName?: string;
    lastName?: string;
  }
  
  export default interface PlayerRepository {
    get(id: number): Promise<Player>;
  
    getMany(ids: number[]): Promise<Player[]>;
  
    create(params: CreateParameters): Promise<Player>;
  
    update(id: number, firstName: string, lastName: string): Promise<Player>;
  
    find(params: FindParameters): Promise<Player[]>;
  
    count(params: CountParameters): Promise<number>;
  
    delete(id: number): Promise<Player>;
  }