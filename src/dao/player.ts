import database from "src/database";
import { Player } from "src/types/player";

export async function get(_id: number): Promise<Player | null> {
  const player = await database<Player>("players").select("*").where({ id: _id }).first();
  if(player != undefined && player != null) {
    return player;
  } else {
    return null;
  }
  /*  return {
        id: id,
        lastname: "Doe",
        firstname: "Works",
      };*/
}