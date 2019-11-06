/**
 *
 * EXERCÍCIOS DE INTERPRETAÇÃO
 *
 * EXERCÍCIO 1
 *
 * O código está somando todos os valores de 'i', enquanto 'i'
 * for menor do que 11, sendo que a cada execução ele aumenta 1
 * no valor de 'i'.
 * O resultado impresso no console será "55".
 */

/**
 * EXERCÍCIO 2
 *
 * a. O comando ".push" acrescenta um valor no final do array.
 * b. O valor impresso no console é "[10, 15, 20, 25, 30]".
 * c. Se "numero === 3", seria impresso "[12, 15, 18, 27, 30]".
 * Já se "numero === 4", seria impresso "[12, 20]".
 *
 */

/**
 * EXERCÍCIO 3
 *
 * Seria impresso:
 * 0
 * 00
 * 000
 * 0000
 *
 */

/**
 *
 * EXERCÍCIOS DE ESCRITA DE CÓDIGO
 *
 * EXERCÍCIO 4
 */

// a
const array = [1, 2, 4, 7, 8, 10, 15, 22, 30, 35, 50, 120, 210, 375];
//const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = array[0];
let menor = array[0];

for (const elemento of array) {
  if (elemento > maior) {
    maior = elemento;
  }
  if (elemento < menor) {
    menor = elemento;
  }
}

console.log("O maior número é " + maior + " e o menor número é " + menor + ".");

// b
let arrayDivDez = [];

for (let elemento of array) {
  elemento = elemento / 10;
  arrayDivDez.push(elemento);
}

console.log(arrayDivDez);

// c
let arrayImpar = [];

for (const elemento of array) {
  if (elemento % 2 !== 0) {
    arrayImpar.push(elemento);
  }
}

console.log(arrayImpar);

// d
let arrayString = [];
let novoElemento = "";

for (let i = 0; i < array.length; i++) {
  let item = array[i];
  novoElemento = "O elemento de index " + i + " é " + item;
  arrayString.push(novoElemento);
}

console.log(arrayString);

/**
 * EXERCÍCIOS 5 e 6
 *
 * A resolução dos dois exercícios é basicamente a mesma,
 * mudando somente a primeira linha do código.
 * Para o exercício 5, descomentar a linha 105.
 * Para o exercício 6, descomentar a linha 106.
 * O restante do código está nas linhas 108 a 132.
 *
 * Considerei que a mudança para o exercício 6 foi simples de
 * fazer e também de pensar. Isso porque a única alteração era
 * o número escolhido, que passou a ser automática.
 */

//const numEscolhido = Number(prompt("Escolha um número:"));
//const numEscolhido = Math.floor(Math.random() * 100 + 1);

/* let tentativas = 1;

console.log("Vamos jogar!");

let numChute = Number(prompt("Chute um número:"));

while (numChute !== numEscolhido) {
  console.log("O número chutado foi: " + numChute);
  if (numChute < numEscolhido) {
    console.log("Errrrrrou! O número é maior.");
    numChute = Number(
      prompt("Errrrrrou! O número é MAIOR. Chute outro número:")
    );
  } else {
    console.log("Errrrrrou! O número é menor.");
    numChute = Number(
      prompt("Errrrrrou! O número é MENOR. Chute outro número:")
    );
  }
  tentativas++;
}

console.log("O número chutado foi: " + numChute);
console.log("Acertou!");
console.log("O número de tentativas foi: " + tentativas); */
