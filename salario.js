import express from "express";

const app = express();

app.get("/api/salario/:valorHora/:horas", (req, res) => {
  const valorHora = Number(req.params.valorHora);
  const horas = Number(req.params.horas);

  const salario = valorHora * horas;

  res.send({ salario });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
