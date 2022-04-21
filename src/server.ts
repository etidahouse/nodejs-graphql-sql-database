
import express, {Request, Response} from "express";

const app = express();
const PORT = 8080;

app.get("/", (_: Request, resp: Response) => {
    resp.send("Hello world");
});

app.listen(PORT, () => {
    console.log("Graphql server up and running on port " + PORT)
});