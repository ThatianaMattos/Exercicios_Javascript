// Atividade IF 01 — Soma e Comparação (modo simples)
const leia = require("readline-sync");

// Entrada
let A = leia.questionInt("Digite o numero A: ");
let B = leia.questionInt("Digite o numero B: ");
let C = leia.questionInt("Digite o numero C: ");

// Processamento
let soma = A + B;

// Mostra a continha (>, < ou =)
let simbolo;

// Frase final
if (soma > C) {
  console.log("A Soma de A + B e Maior do que C");
  simbolo = " > ";
} else if (soma < C) {
  console.log("A Soma de A + B e Menor do que C");
  simbolo = " < ";
} else {
  console.log("A Soma de A + B e Igual a C");
  simbolo = " = ";
}

console.log("\n" + A + " + " + B + " = " + soma + simbolo + C);
