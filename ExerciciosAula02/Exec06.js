const leia = require("readline-sync");

// Entrada de dados
let nome = leia.question("Digite o nome do colaborador: ");
let cargo = leia.questionInt("Digite o código do cargo (1 a 6): ");
let salario = leia.questionFloat("Digite o salário: ");

// Variáveis que serão definidas no switch
let nomeCargo 
let reajuste 

// Processamento
switch (cargo) {
  case 1:
    nomeCargo = "Gerente";
    reajuste = 0.1;
    break;
  case 2:
    nomeCargo = "Vendedor";
    reajuste = 0.07;
    break;
  case 3:
    nomeCargo = "Supervisor";
    reajuste = 0.09;
    break;
  case 4:
    nomeCargo = "Motorista";
    reajuste = 0.06;
    break;
  case 5:
    nomeCargo = "Estoquista";
    reajuste = 0.05;
    break;
  case 6:
    nomeCargo = "Técnico de TI";
    reajuste = 0.08;
    break;
  default:
    console.log("\nCódigo inválido!");
    process.exit();
}

// Calculando novo salário
let novoSalario = salario + reajuste * salario;

// Saída
console.log("\nNome do colaborador: " + nome);
console.log("Cargo: " + nomeCargo);
console.log("Salário: R$ " + novoSalario.toFixed(2));
