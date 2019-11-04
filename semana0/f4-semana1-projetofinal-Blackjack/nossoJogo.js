import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

console.log("Bem-vindo ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")) {
  let cartaUser1 = comprarCarta()
  let cartaUser2 = comprarCarta()
  let cartaPc1 = comprarCarta()
  let cartaPc2 = comprarCarta()

  let pontuacaoUser = cartaUser1.valor + cartaUser2.valor
  let pontuacaoPc = cartaPc1.valor + cartaPc2.valor

  console.log("Usuário - cartas: " + cartaUser1.texto + " " + cartaUser2.texto + " - pontuação: " + pontuacaoUser)
  console.log("Computador - cartas: " + cartaPc1.texto + " " + cartaPc2.texto + " - pontuação: " + pontuacaoPc)
  
  if (pontuacaoUser > pontuacaoPc) {
    console.log("O usuário ganhou!")
  } else if (pontuacaoUser < pontuacaoPc) {
    console.log("O computador ganhou!")
  } else {
    console.log("Empate!")
  }
} else {
  console.log("O jogo acabou.")
}