/* EXERCICIO 1 */

// a.
/*
const adultos = pessoas.filter((el) => {
    return el.idade >= 20
})
*/

// b.
/*
const criancas = pessoas.filter((el) => {
    return el.idade < 20
})
*/


/* EXERCICIO 2 */

// a.
/*
const dobroArray = array.map((el) => {
    return el*2
})
*/

// b. 
/*
const triploArray = array.map((el) => {
    return (el*3).toString()
})
*/

// c.
/*
const stringArray = array.map((el) => {
    if (el % 2 === 0) {
        return el + " é par"
    } else {
        return el + " é ímpar"
    }
})
*/


/* EXERCICIO 3 */

// a. 
/*
const permitidas = pessoas.filter((el) => {
    return el.altura > 1.5 &&
        el.idade > 14 &&
        el.idade < 60
})
*/

// b.
/*
const proibidas = pessoas.filter((el) => {
    return el.altura < 1.5 ||
        el.idade <= 14 ||
        el.idade >= 60
})
*/


/* EXERCICIO 4 */

/*
const arrayEmails = consultas.map((el) => {
    let pronome = ""
    let lembrar = ""
    if (el.genero === "masculino") {
        pronome = "Sr. "
        lembrar = "lembrá-lo "
    } else {
        pronome = "Sra. "
        lembrar = "lembrá-la "
    }
    if (el.cancelada) {
        return "Olá, " + pronome + el.nome + ". Infelizmente, sua consulta marcada para o dia " + 
            el.dataDaConsulta + " foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la."
    } else {
        return "Olá, " + pronome + el.nome + ". Estamos enviando esta mensagem para " + lembrar +
            "da sua consulta no dia " + el.dataDaConsulta + ". Por favor, acuse o recebimento deste e-mail."
    }   
})
*/


/* EXERCICIO 5 */

/* NÃO FINALIZADO!

function atualizarSaldo(array){
    let novoValor
    const gastos = array.map((el) => {
        return el.compras
    })
    console.log(gastos)

    
    const gastosIndividuais = gastos.map((el) => {
        let somaIndividual = 0
        return somaIndividual += Number(el)
    })

    console.log(gastosIndividuais)
    
    array.forEach((el) => {
        el.saldoTotal = novoValor
    })
}

const contas = [
	{ cliente: "Goli", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paulinha", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Darvas", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Lu", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }, 
	{ cliente: "Miau", saldoTotal: -300, compras: [800] }
]

atualizarSaldo(contas)
*/