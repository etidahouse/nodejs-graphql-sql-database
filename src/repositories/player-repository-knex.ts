//import database from "src/database";
import { Player } from "src/types/player";
import PlayerRepository, { CountParameters, CreateParameters, FindParameters } from "./player-repository";

export default class PlayerKnexRepository implements PlayerRepository {

    public async get(_id: number): Promise<Player> {
        return {
              id: -1,
              lastname: "WORKS",
              firstname: "John",
            };
        /*return database.select()
          .from('players')
          .where('id', id)
          .first();*/
    }

    getMany(_ids: number[]): Promise<Player[]> {
        throw new Error("Method not implemented.");
    }
    create(_params: CreateParameters): Promise<Player> {
        throw new Error("Method not implemented.");
    }
    update(_id: number, _firstName: string, _lastName: string): Promise<Player> {
        throw new Error("Method not implemented.");
    }
    find(_params: FindParameters): Promise<Player[]> {
        throw new Error("Method not implemented.");
    }
    count(_params: CountParameters): Promise<number> {
        throw new Error("Method not implemented.");
    }
    delete(_id: number): Promise<Player> {
        throw new Error("Method not implemented.");
    } 
    
}