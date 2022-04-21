
import express, {Request, Response} from "express";

import { graphqlHTTP } from "express-graphql";

import schema from "./schema";

const app = express();
const PORT = 8080;

app.get("/", (_: Request, resp: Response) => {
    resp.send("Hello world");
});

app.listen(PORT, () => {
    console.log("Graphql server up and running on port " + PORT)
});


//graphql playground setup code
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        graphiql: true
    })
);

