// Exec02.ts
import { questionInt, question } from "readline-sync";
import { Stack } from "./Stack";

const pilha = new Stack<string>();

let opcao = -1;

do {
  console.log("\n******************************************");
  console.log("1 - Adicionar Livro na pilha");
  console.log("2 - Listar todos os Livros");
  console.log("3 - Retirar Livro da pilha");
  console.log("0 - Sair");
  console.log("******************************************");

  opcao = questionInt("Entre com a opcao desejada: ");

  switch (opcao) {
    case 1: {
      const nome = question("Digite o nome: ");
      pilha.push(nome);
      console.log("\nPilha:");
      pilha.printStack();
      console.log("\nLivro adicionado!");
      break;
    }

    case 2: {
      if (pilha.isEmpty()) {
        console.log("\nA Pilha está vazia!");
      } else {
        console.log("\nLista de Livros na Pilha:\n");
        pilha.printStack();
      }
      break;
    }

    case 3: {
      if (pilha.isEmpty()) {
        console.log("\nA Pilha está vazia!");
      } else {
        pilha.pop();
        console.log("\nPilha:");
        pilha.printStack();
        console.log("\nUm Livro foi retirado da pilha!");
      }
      break;
    }

    case 0:
      console.log("\nPrograma Finalizado!");
      break;

    default:
      console.log("\nOpcao invalida, tente novamente!");
  }
} while (opcao !== 0);
