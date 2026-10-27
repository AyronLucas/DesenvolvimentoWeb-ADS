import express from "express";

const app = express();

app.get("/api/media-pesos/:peso1/:peso2/:peso3/:peso4/:peso5", (req, res) => {
  const peso1 = Number(req.params.peso1);
  const peso2 = Number(req.params.peso2);
  const peso3 = Number(req.params.peso3);
  const peso4 = Number(req.params.peso4);
  const peso5 = Number(req.params.peso5);

  const media = (peso1 + peso2 + peso3 + peso4 + peso5) / 5;

  res.send({ media });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
