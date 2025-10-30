const leia = require("readline-sync");

let saldo = 1000.0;

let operacao = leia.questionInt(
  "Digite o código da Operação (1-Saldo / 2-Saque / 3-Deposito): "
);

switch (operacao) {
  case 1:
    console.log("\nOperação - Saldo");
    console.log("Saldo: R$ " + saldo.toFixed(2));
    break;

  case 2:
    let saque = leia.questionFloat("Valor do Saque: R$ ");

    if (saque > saldo) {
      console.log("\nOperação - Saque");
      console.log("Saldo Insuficiente!");
    } else {
      saldo = saldo - saque;
      console.log("\nOperação - Saque");
      console.log("Novo Saldo: R$ " + saldo.toFixed(2));
    }
    break;

  case 3:
    let deposito = leia.questionFloat("Valor do Depósito: R$ ");
    saldo = saldo + deposito;
    console.log("\nOperação - Depósito");
    console.log("Novo Saldo: R$ " + saldo.toFixed(2));
    break;

  default:
    console.log("\nOperação Inválida!");
}
