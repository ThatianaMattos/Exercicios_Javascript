const leia = require("readline-sync");

// Entrada de dados
let num1 = leia.questionFloat("Digite o 1º número: ");
let num2 = leia.questionFloat("Digite o 2º número: ");
let operacao = leia.questionInt(
  "Operação (1-Soma / 2-Subtracao / 3-Multiplicacao / 4-Divisao): "
);

// Processamento e Saída
switch (operacao) {
  case 1:
    console.log("\n" + num1 + " + " + num2 + " = " + (num1 + num2));
    break;

  case 2:
    console.log("\n" + num1 + " - " + num2 + " = " + (num1 - num2));
    break;

  case 3:
    console.log("\n" + num1 + " * " + num2 + " = " + num1 * num2);
    break;

  case 4:
    console.log("\n" + num1 + " / " + num2 + " = " + num1 / num2);
    break;

  default:
    console.log("\nOperação Inválida!");
}
