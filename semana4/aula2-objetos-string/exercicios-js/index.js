/* EXERCICIO 1*/

/* O código 'pede' que o usuário insira dois itens, que são o
tipo de investimento e o valor investido. Dependendo do tipo de
investimento, ele multiplica o valor investido por uma constante.
Será impresso no console:
'165
TIPO DE INVESTIMENTO INFORMADO INCORRETO!'
*/


/* EXERCICIO 2*/

/* Utilizamos os arrays quando queremos armazenar um conjunto de
dados, de uma mesma propriedade (ex.: notas dos alunos).
Já os objetos são utilizados quando queremos atribuir várias
propriedas/características a um mesmo item (ex.: quando queremos
colocar criar um objeto com o desempenho dos alunos, o qual contém
nome do aluno, nota e número de faltas).
*/


/* EXERCICIO 3 */


/*
function criaRetangulo(lado1, lado2) {
    const retangulo = {
        largura: undefined,
        altura: undefined,
        perimetro: undefined,
        area: undefined,
    }

    retangulo.largura = lado1
    retangulo.altura = lado2
    retangulo.perimetro = (2 * (lado1 + lado2))
    retangulo.area = lado1 * lado2
}
*/


/* EXERCICIO 4 */


/* const pessoa = {
    nome: "Eloisa",
    idade: 29,
    email: "abc@abdc",
    endereco: "Rua XX, 123"
}

const pessoaAnonima = {
    ...pessoa
}
function anonimizarPessoa() {
    pessoaAnonima.nome = "ANÔNIMO"
}

anonimizarPessoa()

console.log(pessoa)
console.log(pessoaAnonima)
*/

/* EXERCICIO 5 */

/* 
const filmeFavorito = {
    titulo: "À Espera de um Milagre",
    ano: 2000,
    diretor: "Frank Darabont",
    atores: ["Tom Hanks", "David Morse", "Bonnie Hunt"],
}

let listaAtores = filmeFavorito.atores
let nomeAtores = ""
for (let item of listaAtores) {
    nomeAtores += item + ", "
}

let msg = "Venha assistir ao filme " + filmeFavorito.titulo + 
    ", de " + filmeFavorito.ano + ", dirigido por " + 
    filmeFavorito.diretor + " e estrelado por " + nomeAtores + "."

console.log(msg)
*/