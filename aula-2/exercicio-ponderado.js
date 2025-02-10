let nota1 = 5;
let nota2 = 3;
let nota3 = 10;

let media = (nota1 + nota2 + nota3) / 3;

for (let i = 1; i <= 3; i++) {
  if (i == 1) {
    console.log(`Nota 1: ${nota1}`);
  } else if (i == 2) {
    console.log(`Nota 2: ${nota2}`);
  } else if (i == 3) {
    console.log(`Nota 3: ${nota3}`);
  }
}

console.log(`🎓 Média: ${media.toFixed(2)}`);

if (media >= 7) {
  console.log("✅ APROVADO");
} else if (media < 7) {
  console.log("❌ REPROVADO");
}
