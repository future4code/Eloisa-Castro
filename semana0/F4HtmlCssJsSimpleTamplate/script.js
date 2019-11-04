/**
 *
 * EXERCÍCIOS DE INTERPRETAÇÃO
 *
 * EXERCÍCIO 1
 * a. false
 * b. false
 * c. true
 * d. false
 * e. boolean
 */

/**
 * EXERCÍCIO 2
 * a. Array é utilizado para definir de um conjunto de valores/informações. Ele é declarado em JS com [].
 * b. O index inicial de um array é 0.
 * c. O tamanho de um array é dado pelo comando .length.
 * d. As mensagens são:
 * I. undefined
 * II. null
 * III. 11
 * IV. 3 e 4
 * V. 19 e 9
 * VI. 3
 * VII. 1
 */

/**
 *
 * EXERCÍCIOS DE ESCRITA DE CÓDIGO
 *
 * EXERCÍCIO 1
 */

let fahrenheit = 77;
let kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;
console.log("a. " + kelvin + "K");

let celsius = 80;
fahrenheit = celsius * 9 / 5 + 32;
console.log("b. " + fahrenheit + "°F");

celsius = 30;
fahrenheit = celsius * 9 / 5 + 32;
kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;
console.log("c. " + fahrenheit + "°F e " + kelvin + "K");

celsius = Number(prompt("Digite a temperatura, em °C, que deseja converter:"));
fahrenheit = celsius * 9 / 5 + 32;
kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;
console.log("d. " + fahrenheit + "°F e " + kelvin + "K");


/**
 * EXERCÍCIO 2
 */
const pergunta1 = "Qual o seu nome?";
const resposta1 = prompt(pergunta1);
const pergunta2 = "Qual o nome de seu animal de estimação?";
const resposta2 = prompt(pergunta2);
const pergunta3 = "Qual a sua comida favorita?";
const resposta3 = prompt(pergunta3);
const pergunta4 = "Qual o seu filme predileto?";
const resposta4 = prompt(pergunta4);
const pergunta5 = "Você prefere codesandbox ou repl.it?";
const resposta5 = prompt(pergunta5);

console.log("1. " + pergunta1);
console.log("Resposta: " + resposta1);
console.log("2. " + pergunta2);
console.log("Resposta: " + resposta2);
console.log("3. " + pergunta3);
console.log("Resposta: " + resposta3);
console.log("4. " + pergunta4);
console.log("Resposta: " + resposta4);
console.log("5. " + pergunta5);
console.log("Resposta: " + resposta5);

/**
 * EXERCÍCIO 3
 */
const salarioMin = 998;
const valorKwh = salarioMin / 5;
const consumo = 280;
const desconto = 1 - 0.15;

console.log("a. R$ " + valorKwh);
console.log("b. R$ " + consumo * valorKwh);
console.log("c. R$ " + consumo * valorKwh * desconto);