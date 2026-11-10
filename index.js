import express from "express";
 
const app = express();
 
app.use(express.json());
 
// ---------- GET (query params) ----------
 
// Exercício 1: GET /api/exercicio1?produto=Caneta&preco=3.5
app.get("/api/exercicio1", (req, res) => {
  const produto = req.query.produto;
  const preco = Number(req.query.preco);
 
  if (!produto || req.query.preco === undefined || Number.isNaN(preco)) {
    return res.status(400).send({ message: "Informe produto e preco (número)" });
  }
 
  res.send({ message: `O produto ${produto} custa R$ ${preco.toFixed(2)}` });
});
 
// Exercício 2: GET /api/exercicio2?comprimento=10&largura=20
app.get("/api/exercicio2", (req, res) => {
  const comprimento = Number(req.query.comprimento);
  const largura = Number(req.query.largura);
 
  if (
    req.query.comprimento === undefined ||
    req.query.largura === undefined ||
    Number.isNaN(comprimento) ||
    Number.isNaN(largura)
  ) {
    return res
      .status(400)
      .send({ message: "Informe comprimento e largura (números)" });
  }
 
  const area = comprimento * largura;
 
  res.send({ message: `O terreno possui ${area} m²`, area });
});
 
// Exercício 3: GET /api/exercicio3?valorTotal=1200&parcelas=6
app.get("/api/exercicio3", (req, res) => {
  const valorTotal = Number(req.query.valorTotal);
  const parcelas = Number(req.query.parcelas);
 
  if (
    req.query.valorTotal === undefined ||
    req.query.parcelas === undefined ||
    Number.isNaN(valorTotal) ||
    Number.isNaN(parcelas)
  ) {
    return res
      .status(400)
      .send({ message: "Informe valorTotal e parcelas (números)" });
  }
 
  if (parcelas <= 0) {
    return res
      .status(400)
      .send({ message: "O número de parcelas deve ser maior que zero" });
  }
 
  const valorParcela = valorTotal / parcelas;
 
  res.send({
    message: `${parcelas}x de R$ ${valorParcela.toFixed(2)}`,
    valorParcela,
  });
});
 
// ---------- POST (body JSON) ----------
 
// Exercício 4: POST /api/exercicio4   body: { "dias": 3 }
app.post("/api/exercicio4", (req, res) => {
  const dias = Number(req.body.dias);
 
  if (req.body.dias === undefined || Number.isNaN(dias)) {
    return res.status(400).send({ message: "Informe dias (número)" });
  }
 
  const horas = dias * 24;
 
  res
    .status(201)
    .send({ message: `${dias} dia(s) equivalem a ${horas} horas`, horas });
});
 
// Exercício 5: POST /api/exercicio5   body: { "deposito": 1000 }
app.post("/api/exercicio5", (req, res) => {
  const deposito = Number(req.body.deposito);
 
  if (req.body.deposito === undefined || Number.isNaN(deposito)) {
    return res.status(400).send({ message: "Informe deposito (número)" });
  }
 
  const saldo = deposito * 1.02;
 
  res.status(201).send({
    message: `Saldo após 2% de rendimento: R$ ${saldo.toFixed(2)}`,
    saldo,
  });
});
 
// Exercício 6: POST /api/exercicio6   body: { "litros": 40, "distancia": 480 }
app.post("/api/exercicio6", (req, res) => {
  const litros = Number(req.body.litros);
  const distancia = Number(req.body.distancia);
 
  if (
    req.body.litros === undefined ||
    req.body.distancia === undefined ||
    Number.isNaN(litros) ||
    Number.isNaN(distancia)
  ) {
    return res
      .status(400)
      .send({ message: "Informe litros e distancia (números)" });
  }
 
  if (litros <= 0) {
    return res.status(400).send({ message: "Litros deve ser maior que zero" });
  }
 
  const consumoMedio = distancia / litros;
 
  res.status(201).send({
    message: `Consumo médio: ${consumoMedio.toFixed(2)} km/l`,
    consumoMedio,
  });
});
 
// Exercício 7: POST /api/exercicio7   body: { "numero": 10 }
app.post("/api/exercicio7", (req, res) => {
  const numero = Number(req.body.numero);
 
  if (req.body.numero === undefined || Number.isNaN(numero)) {
    return res.status(400).send({ message: "Informe numero (número)" });
  }
 
  const antecessor = numero - 1;
  const sucessor = numero + 1;
 
  res.status(201).send({
    message: `Antecessor: ${antecessor} | Sucessor: ${sucessor}`,
    antecessor,
    sucessor,
  });
});
 
// Exercício 8: POST /api/exercicio8   body: { "idade": 25 }
app.post("/api/exercicio8", (req, res) => {
  const idade = Number(req.body.idade);
 
  if (req.body.idade === undefined || Number.isNaN(idade) || idade < 0) {
    return res
      .status(400)
      .send({ message: "Informe idade (número maior ou igual a zero)" });
  }
 
  const semanas = idade * 52;
 
  res.status(201).send({
    message: `Com ${idade} ano(s), a pessoa já viveu ${semanas} semanas`,
    semanas,
  });
});
 
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});