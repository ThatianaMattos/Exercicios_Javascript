const leia = require('readline-sync');

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

console.log("Vetor: ", vetor);

let numero = leia.questionInt("\nDigite o numero que voce deseja encontrar: ");

let encontrado = false;

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
        console.log(`\nO numero ${numero} esta localizado na posição: ${i}`);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log(`\nO numero ${numero} nao foi encontrado!`);
}
