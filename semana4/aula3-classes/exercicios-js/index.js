/* EXERCICIO 1 */

/*
O código apresentado verifica se os números contidos no array 'numeros' são pares ou ímpares, 
verificando se o número é divisível por 2.
Caso o número seja par, ele o adiciona no 'array1'; caso seja ímpar, o adiciona no 'array2'.
A mensagem impressa no console será:
"Quantidade total de números 14
6
8"
*/


/* EXERCICIO 2 */

/*
O código apresentado devolve, respectivamente, o menor número e o maior número do array 'numeros'.
Para isso, o código verifica se o item do array é menor que o valor da variável 'numero1' e, caso
seja, a variável assume seu valor. Em seguida, verifica se o item é maior que o valor da variável
'numero2' e, caso seja, a variável assume seu valor.
A mensagem impressa no console será:
"-10
1590"
*/


/* EXERCICIO 3 */

/*
O código não irá funcionar, já que ele entrará em um loop infinito, pois o valor de i não aumenta
a cada execução. Além disso, não foi definido o valor da 'quantidadeDeNumerosPares' e o loop deve
ser realizado somente enquanto 'i < quantidadeDeNumerosPares'.
O código corrigido seria:

const quantidadeDeNumerosPares = 3
let i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
}
*/

/* EXERCICIO 4 */

// a. 
/*
function verificarTriangulo(a, b, c) {
    if (a === b && b === c) {
        console.log("O triângulo é equilátero.")
    } else if (a === b || a === c || b === c ) {
        console.log("O triângulo é isósceles.")
    } else {
        console.log("O triângulo é escaleno.")
    }
}
*/

// b.
/* 
class triangulo {
    constructor (a, b, c) {
        this.lado1 = a
        this.lado2 = b
        this.lado3 = c
    }
    verificaTriangulo() {
        if (this.lado1 === this.lado2 && this.lado2 === this.lado3) {
            console.log("O triângulo é equilátero.")
        } else if (this.lado1 === this.lado2 ||
            this.lado1 === this.lado3 ||
            this.lado2 === this.lado3 ) {
                console.log("O triângulo é isósceles.")
        } else {
            console.log("O triângulo é escaleno.")
        }
    }
}
 */


/* EXERCICIO 5 */

// item 1

/*
const a = 15
const b = 30

if (a > b) {
    console.log("O maior é: " + a)
} else if (a < b) {
    console.log("O maior é: " + b)
} else {
    console.log("Os números são iguais")
}

if (a % b === 0) {
    console.log(a + " é divisível por " + b)
} else {
    console.log(a + " não é divisível por " + b)
}

if (b % a === 0) {
    console.log(b + " é divisível por " + a)
} else {
    console.log(b + " não é divisível por " + a)
}

if (a > b) {
    const diferenca1 = a - b
    console.log("A diferença entre eles é " + diferenca1)
} else {
    const diferenca2 = b - a
    console.log("A diferença entre eles é " + diferenca2)
}
*/

// item extra

/*
class numeros {
    constructor (a, b) {
        this.num1 = a
        this.num2 = b
    }

    verificaMaior() {
        if (a > b) {
            console.log("O maior é: " + a)
        } else if (a < b) {
            console.log("O maior é: " + b)
        } else {
            console.log("Os números são iguais")
        }
    }
    
    verificaDivisao() {
        if (a % b === 0) {
            console.log(a + " é divisível por " + b)
        } else {
            console.log(a + " não é divisível por " + b)
        }
        
        if (b % a === 0) {
            console.log(b + " é divisível por " + a)
        } else {
            console.log(b + " não é divisível por " + a)
        }
    }
    
    verificaDiferença() {
        if (a > b) {
            const diferenca1 = a - b
            console.log("A diferença entre eles é " + diferenca1)
        } else {
            const diferenca2 = b - a
            console.log("A diferença entre eles é " + diferenca2)
        }
    }
}
*/
