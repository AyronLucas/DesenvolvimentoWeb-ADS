import express from "express";

const app = express();

app.get("/api/milhas/:distancia", (req, res) => {
  const distancia = Number(req.params.distancia);

  const quilometros = distancia * 1.60934;

  res.send({ quilometros })
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
