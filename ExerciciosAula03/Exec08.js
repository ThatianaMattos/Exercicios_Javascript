const leia = require('readline-sync');

let vetor = [];

// Entrada de dados
for (let i = 0; i < 10; i++) {
    let numero = leia.questionInt(`Digite o ${i+1}º numero: `);
    vetor[i] = numero;
}

// Elementos nos índices ímpares
console.log("\nElementos nos índices ímpares:");
for (let i = 1; i < vetor.length; i += 2) {
    console.log(vetor[i]);
}

// Elementos pares
console.log("\nElementos pares:");
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 === 0) {
        console.log(vetor[i]);
    }
}

// Soma e média
let soma = 0;
for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];
}

let media = soma / vetor.length;

console.log(`\nSoma: ${soma}`);
console.log(`Média: ${media.toFixed(2)}`);

