
import express, {Request, Response} from "express";

import { graphqlHTTP } from "express-graphql";
import config from "./config";
import { database } from "./database";

import schema from "./schema";

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

        await database.schema.createTableIfNotExists('players', (table: any) => {
            table.string('firstName');
            table.string('lastName');
            table.integer('id').notNullable().defaultTo(0);
        }).then(function () {
            return database("players").insert([
                {id: 0, firstName: "Eti", lastName: "DA"}
            ])
        });

        app.listen(config.port, () => {
            console.log(`Server started at http://localhost:${config.port}`);
        });
    } catch (error) {
        console.error(error)
        process.exit(1);
    }
}
  
start();
