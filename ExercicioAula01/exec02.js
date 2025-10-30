// Atividade 2 - Cálculo média final
const leia = require("readline-sync")

// Entrada das notas
let nota1 = leia.questionFloat("Digite a primeira nota: ")
let nota2 = leia.questionFloat("Digite a segunda nota: ")
let nota3 = leia.questionFloat("Digite a terceira nota: ")  
let nota4 = leia.questionFloat("Digite a quarta nota: ")

// Cálculo da média
let media = (nota1 + nota2 + nota3 + nota4) / 4
console.log(`A média final do aluno é: ${media.toFixed(2)}`)
