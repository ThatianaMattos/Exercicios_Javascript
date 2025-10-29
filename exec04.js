// Atividade 4 - Diferença entre produtos
const leia = require("readline-sync")

// Entrada de dados 
let n1 = leia.questionFloat("Digite o valor do numero1: ")
let n2 = leia.questionFloat("Digite o valor do numero2: ")
let n3 = leia.questionFloat("Digite o valor do numero3: ")
let n4 = leia.questionFloat("Digite o valor do numero4: ")  
// Cálculo da diferença
let diferenca = (n1 * n2) - (n3 * n4)
console.log(`A diferença entre os produtos é: ${diferenca.toFixed(2)}`)    
