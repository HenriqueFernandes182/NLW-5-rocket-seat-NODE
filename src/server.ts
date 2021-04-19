import express from "express";

const app = express();

// GET = Buscas
// POST = Criação
// DELETE = Deletar
// PATCH = Alterar uma informação especifica (PUT)

app.get("/", (request, response) => {
    return response.json({
        message:"Olá NWL 05"
    })
});

app.post("/", (request, response) => {
    return response.json({ message: "Usuario salvo com sucesso!" });
});

app.listen(3333, () => console.log("server is running on port 3333"));