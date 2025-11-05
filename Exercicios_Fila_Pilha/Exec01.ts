import readlineSync from "readline-sync";
import { Queue } from "./Queue"; // mantém esse arquivo do cookbook na mesma pasta

const fila = new Queue<string>();

function menu() {
  console.log("\n***************************************");
  console.log("1 - Adicionar Cliente na Fila");
  console.log("2 - Listar todos os Clientes");
  console.log("3 - Retirar Cliente da Fila");
  console.log("0 - Sair");
  console.log("***************************************");
}

let opcao = -1;

while (opcao !== 0) {
  menu();
  opcao = Number(readlineSync.question("Entre com a opcao desejada: "));

  switch (opcao) {
    case 1: {
      const nome = readlineSync.question("Digite o nome: ");
      fila.enqueue(nome);
      console.log("\nFila:");
      fila.printQueue();
      console.log("\nCliente Adicionado!");
      break;
    }
    case 2: {
      console.log("\nLista de Clientes na Fila:");
      fila.printQueue();
      break;
    }
    case 3: {
      const retirado = fila.dequeue();
      if (retirado === undefined) {
        console.log("\nA Fila está vazia!");
      } else {
        console.log("\nFila:");
        fila.printQueue();
        console.log("\nO Cliente foi Chamado!");
      }
      break;
    }
    case 0:
      console.log("\nPrograma Finalizado!");
      break;
    default:
      console.log("\nOpcao invalida!");
  }
}
