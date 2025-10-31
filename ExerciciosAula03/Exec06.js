const leia = require("readline-sync");

let soma = 0;
let contador = 0;
let numero;

do {
    numero = leia.questionInt("Digite um numero: ");

    if (numero > 0 && numero % 3 === 0) {
        soma += numero;
        contador++;
    }

} while (numero !== 0);

if (contador > 0) {
    let media = soma / contador;
    console.log(`\nA media de todos os numeros multiplos de 3 é: ${media.toFixed(2)}`);
} else {
    console.log("\nNenhum numero valido foi digitado!");
}
