import { database } from "../database";
import { Player } from "src/types/player";
import PlayerRepository, { CountParameters, CreateParameters, FindParameters } from "../repositories/player-repository";

export default class PlayerKnexDao implements PlayerRepository {

    public async get(id: number): Promise<Player> {
        const player = await database<Player>("players").select("*").where({id}).first();
        if (player != null && player != undefined){
            return player;
        } else {
            throw new Error(`player (${id}) not found.`)
        }       
    }

    public async getAll(): Promise<Player[]> {
        return await database<Player>("players").select();
    }
    
    public async find(params: FindParameters): Promise<Player[]> {
        
        const { firstName, lastName } = params;

        return await database.select()
          .from('players')
          .modify((queryBuilder) => {
            
            if (typeof firstName !== 'undefined' && firstName !== null) {
              queryBuilder.where('firstName', 'like', `%${firstName}%`);
            }
    
            if (typeof lastName !== 'undefined' && lastName !== null) {
              queryBuilder.where('lastName', 'like', `%${lastName}%`);
            }
    
        });        
        
    }

    public async count(params: CountParameters): Promise<number> {

        const { firstName, lastName } = params;

        return await database.count({ count: '*' })
            .from('players')
            .modify((queryBuilder) => {
                if (typeof firstName !== 'undefined' && firstName !== null) {
                    queryBuilder.where('firstName', 'like', `%${firstName}%`);
                }

                if (typeof lastName !== 'undefined' && lastName !== null) {
                    queryBuilder.where('lastName', 'like', `%${lastName}%`);
                }
            })
            .first()
            .then(result => result.count);
    }

    public async create(params: CreateParameters): Promise<Player> {

        return await database.returning("id")
            .insert({
                firstName: params.firstName,
                lastName: params.lastName,
            })
            .into('players')
            .then(ids => {
                return this.get(ids[0].id);
            });
    }

    update(_id: number, _firstName: string, _lastName: string): Promise<Player> {
        throw new Error("Method not implemented.");
    }

    delete(_id: number): Promise<Player> {
        throw new Error("Method not implemented.");
    } 
    
}