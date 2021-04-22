import express from "express";

import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

// GET = Buscas
// POST = Criação
// DELETE = Deletar
// PATCH = Alterar uma informação especifica (PUT)
app.listen(3333, () => console.log("server is running on port 3333"));