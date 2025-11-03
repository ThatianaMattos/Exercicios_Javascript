import readlineSync from "readline-sync";

// Collection Array já inicializada com 10 valores
let numeros: number[] = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

console.log("Array:");
console.log(numeros);

// Solicita o número a ser buscado
let numeroBuscado = readlineSync.questionInt("\nDigite o número que você deseja encontrar: ");

// Procura o número no array
let posicao = numeros.indexOf(numeroBuscado);

// Resultado
if (posicao !== -1) {
  console.log(`\nO número ${numeroBuscado} está localizado na posição: ${posicao}`);
} else {
  console.log(`\nO número ${numeroBuscado} não foi encontrado!`);
}
