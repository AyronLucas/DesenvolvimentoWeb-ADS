import express from "express";

const app = express();

app.get("/api/temperatura/:celsius", (req, res) => {
  const celsius = Number(req.params.celsius);

  const fahrenheit = (9 * celsius + 160) / 5;

  res.send({ fahrenheit });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
