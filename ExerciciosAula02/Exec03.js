// Atividade IF 03 — Doação de sangue (modo simples)
const leia = require("readline-sync");

// Entrada
let nome = leia.question("Digite o nome do doador: ");
let idade = leia.questionInt("Digite a idade do doador: ");

// Opção A (recomendada): pergunta SIM/NÃO e já devolve booleano
let primeiraDoacao = leia.keyInYNStrict("E a primeira doacao? (Y/N) ");
//           Y -> true   |   N -> false

// ---- Processamento das regras ----
// Regra 1: idade fora de 18..69 => NAO apto
// Regra 2: idade entre 60..69 E primeira doacao => NAO apto
// Caso contrario => APTO
let apto;

if (idade < 18 || idade > 69) {
  apto = false;
} else if (idade >= 60 && idade <= 69 && primeiraDoacao === true) {
  apto = false;
} else {
  apto = true;
}

// ---- Saida ----
if (apto) {
  console.log("\n" + nome + " esta apto para doar sangue!");
} else {
  console.log("\n" + nome + " nao esta apto para doar sangue!");
}
