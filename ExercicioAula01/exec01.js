// Atividade 01 - Novo Salário
const leia = require("readline-sync");

let salario, abono, novoSalario;
salario = leia.questionFloat("Digite o salário do funcionário: ");
abono = leia.questionFloat("Digite o valor do abono: ");
novoSalario = salario + abono;

console.log(`O novo salário do funcionário é: R$ ${novoSalario.toFixed(2)}`);
