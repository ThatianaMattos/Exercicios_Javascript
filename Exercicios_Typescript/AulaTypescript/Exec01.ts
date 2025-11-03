import readlineSync from "readline-sync";

let cores: string[] = [];

for (let i = 0; i < 5; i++) {
  let cor = readlineSync.question(`Digite uma cor (${i+1}/5): `);
  cores.push(cor);
}

console.log("\nLista das cores adicionadas:");
cores.forEach(c => console.log(c));

console.log("\nCores em ordem crescente:");
cores.sort().forEach(c => console.log(c));
