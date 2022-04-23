import { database } from "../database";
import { Player } from "src/types/player";
import PlayerRepository, { CountParameters, CreateParameters, FindParameters } from "../repositories/player-repository";

export default class PlayerKnexRepository implements PlayerRepository {

    public async get(id: number): Promise<Player> {
        const player = await database<Player>("players").select("*").where({id}).first();
        if (player != null && player != undefined){
            return player;
        } else {
            throw new Error(`player (${id}) not found.`)
        }       
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