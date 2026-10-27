import express from "express";

const app = express();

app.get("/api", (req, res) => {
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);

  res.send({ message: num1 + num2 });
});

app.get("/api/pessoa/:id", (req, res) => {
  const id = req.params.id;

  res.send({ message: `Id da pessoa: ${id} ` });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
