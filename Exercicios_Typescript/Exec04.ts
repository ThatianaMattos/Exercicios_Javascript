import * as readlineSync from "readline-sync";

// Criando o Set com 10 valores
const numeros: Set<number> = new Set([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

// Exibindo o conjunto
console.log("Set:");
console.log([...numeros].join(", "));

// Solicitando um número ao usuário
const num = readlineSync.questionInt("\nDigite o número que você deseja encontrar: ");

// Verificando se o número existe no Set
if (numeros.has(num)) {
  console.log(`\nO número ${num} foi encontrado!`);
} else {
  console.log(`\nO número ${num} não foi encontrado!`);
}
