/**
 * EXERCICIOS DE INTERPRETACAO DE CODIGO
 **/

/**
 * EXERCICIO 1
 *
 * O código pede para que o usuário insira um número.
 * Então, ele testa se o número inserido é divisível por 2, ou seja, se ele é par.
 * Para os números pares, ele imprime no console "Passou no teste".
 * Já para os números ímpares, ele imprime "Não passou no teste".
 *
 **/

/**
 * EXERCICIO 2
 *
 * a. O código serve para atribuir preços diferentes, conforme a fruta inserida pelo usuário.
 * b. "O preço da fruta Maçã é R$ 2.25"
 * c. R$ 24.55
 * d. "O preço da fruta Pêra é R$ 5"
 *
 **/

/**
 * EXERCICIO 3
 *
 * Não será impressa a mensagem no terminal, já que há um erro no código.
 * A variável 'mensagem' está definida no bloco do if, o que não permitirá que ela seja utilizada fora do escopo deste bloco.
 *
 **/

/**
 * EXERCICIOS DE ESCRITA DE CODIGO
 * obs.: os códigos estão comentados para não ficar aparecendo
 * várias caixinhas na tela! =)
 */

/**
 * EXERCICIO 1
 * a.
 **/

/* const numero1 = Number(prompt("Digite o primeiro número:"));
const numero2 = Number(prompt("Digite o segundo número:"));

if (numero1 > numero2) {
  console.log(numero1 + " " + numero2);
} else {
  console.log(numero2 + " " + numero1);
}
 */
/**
 * Da forma com que o código foi escrito, se os dois números forem iguais,
 * a mensagem impressa no console será os dois números (seguindo o comando do 'else').
 */

/**
 * EXERCICIO 1
 * b.
 **/

/* const numero1 = Number(prompt("Digite o primeiro número:"));
const numero2 = Number(prompt("Digite o segundo número:"));
const numero3 = Number(prompt("Digite o terceiro número:"));

if (numero1 >= numero2 && numero1 >= numero3) {
  if (numero2 >= numero3) {
    console.log(numero1 + " " + numero2 + " " + numero3);
  } else {
    console.log(numero1 + " " + numero3 + " " + numero2);
  }
} else if (numero2 >= numero1 && numero2 >= numero3) {
  if (numero1 >= numero3) {
    console.log(numero2 + " " + numero1 + " " + numero3);
  } else {
    console.log(numero2 + " " + numero3 + " " + numero1);
  }
} else if (numero3 >= numero1 && numero3 >= numero2) {
  if (numero1 >= numero2) {
    console.log(numero3 + " " + numero1 + " " + numero2);
  } else {
    console.log(numero3 + " " + numero2 + " " + numero1);
  }
} */

/**
 * Conforme o código, quando os três números forem iguais, a mensagem impressa
 * no console será os três números.
 **/

/**
 * EXERCICIO 1
 * c.
 **/

/* const numero1 = Number(prompt("Digite o primeiro número:"));
const numero2 = Number(prompt("Digite o segundo número:"));
const numero3 = Number(prompt("Digite o terceiro número:"));

if (numero1 === numero2 && numero2 === numero3) {
  prompt("Você deve inserir pelo menos um número diferente.");
} else {
  if (numero1 >= numero2 && numero1 >= numero3) {
    if (numero2 >= numero3) {
      console.log(numero1 + " " + numero2 + " " + numero3);
    } else {
      console.log(numero1 + " " + numero3 + " " + numero2);
    }
  } else if (numero2 >= numero1 && numero2 >= numero3) {
    if (numero1 >= numero3) {
      console.log(numero2 + " " + numero1 + " " + numero3);
    } else {
      console.log(numero2 + " " + numero3 + " " + numero1);
    }
  } else if (numero3 >= numero1 && numero3 >= numero2) {
    if (numero1 >= numero2) {
      console.log(numero3 + " " + numero1 + " " + numero2);
    } else {
      console.log(numero3 + " " + numero2 + " " + numero1);
    }
  }
} */

/**
 * EXERCICIO 2
 * a. Link para imagem:
 * https://drive.google.com/file/d/1oxit_YBo8dhRalylOrN-6QmgxZdi-c3N/view?usp=sharing
 **/

/**
 * EXERCICIO 2
 *b.
 **/

/* const pergunta1 = prompt("Tem ossos formando o esqueleto? [s/n]");

if (pergunta1 === "s") {
  const pergunta2 = prompt("Possui pelos? [s/n]");
  if (pergunta2 === "s") {
    const pergunta3 = prompt("É racional? [s/n]");
    if (pergunta3 === "s") {
      console.log("Ser humano");
    } else {
      const pergunta4 = prompt("Possui penas? [s/n]");
      if (pergunta4 === "s") {
        console.log("Ave");
      } else {
        console.log("Mamífero não humano");
      }
    }
  } else {
    const pergunta5 = prompt("É um animal terrestre? [s/n]");
    if (pergunta5 === "s") {
      const pergunta6 = prompt(
        "Passa parte da vida em ambiente aquático? [s/n]"
      );
      if (pergunta6 === "s") {
        console.log("Anfíbio");
      } else {
        console.log("Réptil");
      }
    } else {
      console.log("Peixe");
    }
  }
} else {
  console.log("Invertebrado");
} */

/**
 * EXERCICIO 3
 *
 **/

/* const nome = prompt("Coloque seu nome:");
let promptTipoJogo = prompt(
  "Qual o tipo de jogo: internacional [IN] ou doméstico [DO]?"
);
let tipoJogo;
let moeda;
switch (promptTipoJogo) {
  case "IN":
    tipoJogo = "Internacional";
    moeda = "U$ ";
    break;

  case "DO":
    tipoJogo = "Doméstico";
    moeda = "R$ ";
    break;

  default:
    tipoJogo = "Não definido";
    moeda = "";
    break;
}

let promptEtapaJogo = prompt(
  "Qual etapa do jogo: semi-final [SF], decisão de 3° lugar [DT] ou final [FI]?"
);

let etapaJogo;
switch (promptEtapaJogo) {
  case "SF":
    etapaJogo = "Semi-final";
    break;

  case "DT":
    etapaJogo = "Decisão de 3° lugar";
    break;

  case "FI":
    etapaJogo = "Final";
    break;

  default:
    etapaJogo = "Não definido";
    break;
}

const categoria = prompt("Qual a categoria: 1, 2, 3 ou 4?");
const quantIngressos = Number(prompt("Qual a quantidade de ingressos?"));

let tipoIngresso = promptEtapaJogo + categoria;
let precoIngresso;
switch (tipoIngresso) {
  case "SF1":
    precoIngresso = 1320.0;
    break;

  case "SF2":
    precoIngresso = 880.0;
    break;

  case "SF3":
    precoIngresso = 550.0;
    break;

  case "SF4":
    precoIngresso = 220.0;
    break;

  case "DT1":
    precoIngresso = 660.0;
    break;

  case "DT2":
    precoIngresso = 440.0;
    break;

  case "DT3":
    precoIngresso = 330.0;
    break;

  case "DT4":
    precoIngresso = 170.0;
    break;

  case "FI1":
    precoIngresso = 1980.0;
    break;

  case "FI2":
    precoIngresso = 1320.0;
    break;

  case "FI3":
    precoIngresso = 880.0;
    break;

  case "FI4":
    precoIngresso = 330.0;
    break;

  default:
    precoIngresso = "Não definido";
    break;
}

let valorTotal = precoIngresso * quantIngressos;

console.log("--- Dados da compra ---");
console.log("Nome do cliente: " + nome);
console.log("Tipo do jogo: " + tipoJogo);
console.log("Etapa do jogo: " + etapaJogo);
console.log("Categoria: " + categoria);
console.log("Quantidade de Ingressos: " + quantIngressos);
console.log("--- Valores ---");
console.log("Valor do ingresso: " + moeda + precoIngresso);
console.log("Valor total: " + moeda + valorTotal); */
