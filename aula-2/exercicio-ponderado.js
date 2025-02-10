let notas = [5, 3, 10];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

let media = soma / notas.length;

for (let i = 1; i <= 3; i++) {
  console.log(`Nota ${i}: ${notas[i - 1]}`);
}

console.log(`🎓 Média: ${media.toFixed(2)}`);

if (media >= 7) {
  console.log("✅ APROVADO");
} else if (media < 7) {
  console.log("❌ REPROVADO");
}
