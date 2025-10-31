const leia = require('readline-sync');

let soma = 0;
let numero;

do {
    numero = leia.questionInt("Digite um número: ");
    
    if (numero > 0) {
        soma += numero;
    }

} while (numero !== 0);

console.log(`\nA soma dos números positivos é: ${soma}`);
