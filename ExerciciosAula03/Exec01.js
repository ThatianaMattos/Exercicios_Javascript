const leia = require("readline-sync");

let inicio = leia.questionInt("Inicio do intervalo: ");
let fim = leia.questionInt("Fim do intervalo: ");

// Validação do intervalo
if (inicio > fim) {
  console.log("Intervalo inválido!");
} else {
  console.log(`\nNo intervalo entre ${inicio} e ${fim}:`);

  for (let i = inicio; i <= fim; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} é múltiplo de 3 e 5`);
    }
  }
}