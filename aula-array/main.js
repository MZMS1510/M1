let meuArray = [1, 2, 3, 4, 5];
meuArray.unshift(0);
console.log(meuArray); // [0, 1, 2, 3, 4, 5]

meuArray.splice(1, 0, 5);
console.log(meuArray); // [0, 5, 1, 2, 3, 4, 5]

console.log(new Array(5).fill(0));
