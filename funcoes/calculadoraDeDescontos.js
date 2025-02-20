/*
function calcularDesconto(preco, desconto) {
  return preco - preco * (desconto / 100);
}

const preco1 = 100;
const preco2 = 200;
const preco3 = 300;
const preco4 = 400;

const desconto1 = 5;
const desconto2 = 10;
const desconto3 = 15;
const desconto4 = 20;

const precoFinal1 = calcularDesconto(preco1, desconto1);
const precoFinal2 = calcularDesconto(preco2, desconto2);
const precoFinal3 = calcularDesconto(preco3, desconto3);
const precoFinal4 = calcularDesconto(preco4, desconto4);

console.log(`Preço 1: ${preco1}`);
console.log(`Preço 1: ${desconto1}`);
console.log(`Preço 1: ${precoFinal1}`);

console.log("\n");

console.log(`Preço 2: ${preco2}`);
console.log(`Preço 2: ${desconto2}`);
console.log(`Preço 2: ${precoFinal2}`);

console.log("\n");

console.log(`Preço 3: ${preco3}`);
console.log(`Preço 3: ${desconto3}`);
console.log(`Preço 3: ${precoFinal3}`);

console.log("\n");

console.log(`Preço 4: ${preco4}`);
console.log(`Preço 4: ${desconto4}`);
console.log(`Preço 4: ${precoFinal4}`);

console.log("\n");
*/

/* COMO EU FARIA */
const produtos = [
  { preco: 100, desconto: 5 },
  { preco: 200, desconto: 50 },
  { preco: 1570, desconto: 19 },
  { preco: 300, desconto: 10 },
];

function calcularDesconto(preco, desconto) {
  return preco - (preco / 100) * desconto;
}

for (let i = 0; i < produtos.length; i++) {
  let precoFinal = calcularDesconto(produtos[i].preco, produtos[i].desconto);

  console.log(`Preço ${i}: ${produtos[i].preco}`);
  console.log(`Desconto ${i}: ${produtos[i].desconto}`);
  console.log(`Preço Final ${i}: ${precoFinal}`);
  console.log("\n");
}
