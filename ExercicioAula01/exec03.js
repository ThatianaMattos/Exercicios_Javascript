// Atividade 03 - Salário Líquido
const leia = require("readline-sync");

// Entrada de dados
let salarioBruto = leia.questionFloat("Digite o salário bruto: ");
let adicionalNoturno = leia.questionFloat("Digite o valor do adicional noturno: ");
let horasExtras = leia.questionFloat("Digite a quantidade de horas extras: ");
let descontos = leia.questionFloat("Digite o valor dos descontos: ");

// Cálculo do salário líquido
let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

// Saída formatada
console.log(`O salário líquido é: R$ ${salarioLiquido.toFixed(2)}`);
