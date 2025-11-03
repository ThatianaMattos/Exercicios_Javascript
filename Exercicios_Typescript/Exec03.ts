import readlineSync from 'readline-sync';

const numeros = new Set<number>();

console.log("Digite 10 números inteiros (não repetidos):");

for (let i = 0; i < 10; i++) {
    const num = readlineSync.questionInt(`Digite o ${i + 1}º número: `);
    numeros.add(num); // Set ignora repetidos automaticamente
}

console.log("\nListar dados do Set:");
numeros.forEach(numero => console.log(numero));
