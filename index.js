import express from "express";
 
const app = express();
 
app.get("/api/pessoa/:id", (req, res) => {
    const id = req.query.id
res.send({message:`ID da pessoa é: ${id}`});
});
 
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000/api");
});
 
