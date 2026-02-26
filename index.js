import express from "express";
import socketServer from './src/services/webSocketService.js';
import htpp from "http";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./src/routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
const server = htpp.createServer(app);

app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes)

socketServer.init(server);

const httpPort = 3000;

server.listen(httpPort, () => {
    console.log(`server is running at http://localhost:${httpPort}`);
})