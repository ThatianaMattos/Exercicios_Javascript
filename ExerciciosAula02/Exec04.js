const leia = require("readline-sync");

// Entrada
let tipo = leia.question("Digite a 1ª palavra: ");       // vertebrado ou invertebrado
let classe = leia.question("Digite a 2ª palavra: ");     // ave, mamifero, inseto ou anelideo
let alimento = leia.question("Digite a 3ª palavra: ");   // carnivoro, onivoro, herbivoro, hematofago

// Processamento e Saída
if (tipo == "vertebrado") {

    if (classe == "ave") {

        if (alimento == "carnivoro") {
            console.log("Águia");
        } else {
            console.log("Pomba");
        }

    } else { // mamifero

        if (alimento == "onivoro") {
            console.log("Homem");
        } else {
            console.log("Vaca");
        }

    }

} else { // invertebrado

    if (classe == "inseto") {

        if (alimento == "hematofago") {
            console.log("Pulga");
        } else {
            console.log("Lagarta");
        }

    } else { // anelideo

        if (alimento == "hematofago") {
            console.log("Sanguessuga");
        } else {
            console.log("Minhoca");
        }

    }
}