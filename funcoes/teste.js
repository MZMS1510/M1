// const olamundo = () => {
//   console.log("olamundo");
// };

// olamundo();

/*
function nome(parametro1, parametro2) {
  codigo
}
*/

// function soma(a, b) {
//   return a + b;
// }

/*
const soma = (a, b) => a + b;
console.log(soma(5, 6));
*/

/* 
const verificaPar = (num) => {
  if (num % 2 === 0) {
    console.log(`${num} é par`);
  } else {
    console.log(`${num} é impar`);
  }
};

verificaPar(8);
verificaPar(7);
*/

/* 
const createFullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(createFullName("Marcos", "Marcondes"));
*/

/**
 * @description Logs all number until the desired number
 * @param {Number} num
 */
const countTo = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
};

countTo(10);

function contarAte(num) {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
}
