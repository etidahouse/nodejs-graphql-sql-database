
import express, {Request, Response} from "express";

import { graphqlHTTP } from "express-graphql";
import config from "./config";
import { database } from "./database";

import schema from "./schema";
import { Player } from "./types/player";

const app = express();

app.get("/", (_: Request, resp: Response) => {
    resp.send("Hello world");
});

//graphql playground setup code
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        graphiql: true
    })
);

async function start(): Promise<void> {
    try {
        // check database connection
        await database.raw('SELECT 1 + 1 AS result');

        await database.schema.hasTable('players')
            .then(exist => {
                if(!exist) {
                    database.schema.createTable('players', (table: any) => {
                        table.string('firstName');
                        table.string('lastName');
                        table.integer('id').notNullable().defaultTo(0);
                    }).then(function () {
                        return database("players").insert([
                            {id: 0, firstName: "Eti", lastName: "DA"}
                        ]);
                    });            
                } else {
                    database<Player>("players").select().then(players => {
                        if (players.length === 0) {
                            return database("players").insert([
                                {id: 0, firstName: "Eti", lastName: "DA"}
                            ]);
                        } else {
                            return;
                        }
                    })
                }
            });

        app.listen(config.port, () => {
            console.info(`Server started at http://localhost:${config.port}`);
        });
    } catch (error) {
        console.error(error)
        process.exit(1);
    }
}
  
start();
