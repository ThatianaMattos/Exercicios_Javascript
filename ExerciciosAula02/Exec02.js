// // Atividade IF 02 — Par/Ímpar e Positivo/Negativo
// const leia = require("readline-sync");

// // Entrada
// let numero = leia.questionInt("Digite um número: ");

// // Verificar se é par ou ímpar
// let tipoNumero;
// if (numero % 2 == 0) {
//   tipoNumero = "par";
// } else {
//   tipoNumero = "impar";
// }

// // Verificar se é positivo ou negativo
// let sinal;
// if (numero >= 0) {
//   sinal = "positivo";
// } else {
//   sinal = "negativo";
// }

// // Saída
// console.log("\nO Número " + numero + " é " + tipoNumero + " e " + sinal + "!");

const leia = require("readline-sync");

let numero = leia.questionInt("Digite um número: ");

if (numero > 0 && numero % 2 == 0) {
  console.log("O Número " + numero + " é par e positivo!");
} else if (numero < 0 && numero % 2 == 0) {
  console.log("O Número " + numero + " é par e negativo!");
} else if (numero > 0 && numero % 2 != 0) {
  console.log("O Número " + numero + " é impar e positivo!");
} else {
  console.log("O Número " + numero + " é impar e negativo!");
}
