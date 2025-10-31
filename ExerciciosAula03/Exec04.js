const leia = require("readline-sync");

let backend = 0;
let mulherFront = 0;
let homensMobile40 = 0;
let nbFullstack30 = 0;
let totalPessoas = 0;
let somaIdades = 0;

let continuar = true;

while (continuar) {

    const idade = leia.questionInt("Idade: ");

    const genero = leia.questionInt(
        "Identidade de Gênero:\n1-Mulher Cis\n2-Homem Cis\n3-Não Binário\n4-Mulher Trans\n5-Homem Trans\n6-Outros\n--> "
    );

    const dev = leia.questionInt(
        "Pessoa Desenvolvedora:\n1-Backend\n2-Frontend\n3-Mobile\n4-FullStack\n--> "
    );

    // Atualizações básicas
    totalPessoas++;
    somaIdades += idade;

    // Switch para desenvolvedor
    switch (dev) {
        case 1:
            backend++;
            break;

        case 2:
            // Frontend Mulheres Cis e Trans
            if (genero === 1 || genero === 4) {
                mulherFront++;
            }
            break;

        case 3:
            // Mobile Homens Cis e Trans maiores de 40
            if ((genero === 2 || genero === 5) && idade > 40) {
                homensMobile40++;
            }
            break;

        case 4:
            // FullStack Não Binário menor de 30
            if (genero === 3 && idade < 30) {
                nbFullstack30++;
            }
            break;
    }

    continuar = leia.keyInYNStrict("Deseja continuar?");
    console.log("\n--------------------------------------\n");
}

const media = somaIdades / totalPessoas;

console.log(`\nTotal de pessoas desenvolvedoras Backend: ${backend}`);
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulherFront}`);
console.log(`Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${homensMobile40}`);
console.log(`Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${nbFullstack30}`);
console.log(`O número total de pessoas que responderam à pesquisa: ${totalPessoas}`);
console.log(`A média de idade das pessoas que responderam à pesquisa: ${media.toFixed(2)}`);
