import express from "express";

const app = express();

app.get("/api/somar/:numero1/:numero2", (req, res) => {
  const numero1 = Number(req.params.numero1);
  const numero2 = Number(req.params.numero2);

  const resultado = numero1 + numero2;

  res.send({ resultado });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
