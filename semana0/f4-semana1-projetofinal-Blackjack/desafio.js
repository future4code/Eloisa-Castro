import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

if (confirm("Quer iniciar uma nova rodada?")) {
  let cartaUser1 = comprarCarta()
  let cartaUser2 = comprarCarta()
  let cartaPc1 = comprarCarta()
  let cartaPc2 = comprarCarta()

  //comprar novas cartas se dois A
  if (cartaUser1.valor === 11 && cartaUser2.valor === 11 || cartaPc1.valor === 11 && cartaPc2.valor === 11) {
      cartaUser1 = comprarCarta()
      cartaUser2 = comprarCarta()
      cartaPc1 = comprarCarta()
      cartaPc2 = comprarCarta()
  }

  //jogada do usuário
  const arrayUserTexto = [cartaUser1.texto, cartaUser2.texto]
  const arrayUserValor = [cartaUser1.valor, cartaUser2.valor]
  
  let cartasUser = ""
  for (let elemento of arrayUserTexto) {
    cartasUser += elemento + " "
  }
  
  let pontosUser = 0
  for (let elemento of arrayUserValor) {
    pontosUser += elemento
  }

  while (pontosUser <= 21) {
    if (confirm("As suas cartas são " + cartasUser + ". A carta revelada do computador é " + cartaPc1.texto + ".\nDeseja comprar mais uma carta?")) {
    
      let novaCartaUser = comprarCarta()
      arrayUserTexto.push(novaCartaUser.texto)
      arrayUserValor.push(novaCartaUser.valor)

      cartasUser += novaCartaUser.texto + " "
      
      pontosUser += novaCartaUser.valor

    } else {
        break;
    }
  }

  //jogada do computador
  const arrayPcTexto = [cartaPc1.texto, cartaPc2.texto]
  const arrayPcValor = [cartaPc1.valor, cartaPc2.valor]
  
  let cartasPc = ""
  for (let elemento of arrayPcTexto) {
    cartasPc += elemento + " "
  }
  
  let pontosPc = 0
  for (let elemento of arrayPcValor) {
    pontosPc += elemento
  }

  if (pontosUser <= 21) {
    while (pontosPc <= pontosUser && pontosPc <= 21) {
      let novaCartaPc = comprarCarta()
      arrayPcTexto.push(novaCartaPc.texto)
      arrayPcValor.push(novaCartaPc.valor)
      
      cartasPc += novaCartaPc.texto + " "
        
      pontosPc += novaCartaPc.valor
    }
  }

  //definição do resultado
  if (pontosUser <= 21 && pontosPc <= 21) {
    if (pontosUser > pontosPc) {
      alert("Suas cartas são " + cartasUser + ". Sua pontuação é " + pontosUser + ".\nAs cartas do computador são " + cartasPc + ". A pontuação do computador é " + pontosPc + ".\nVocê ganhou!!")
    } else {
      alert("Suas cartas são " + cartasUser + ". Sua pontuação é " + pontosUser + ".\nAs cartas do computador são " + cartasPc + ". A pontuação do computador é " + pontosPc + ".\nO computador ganhou!")
    }
  } else if (pontosUser <= 21 && pontosPc > 21) {
    alert("Suas cartas são " + cartasUser + ". Sua pontuação é " + pontosUser + ".\nAs cartas do computador são " + cartasPc + ". A pontuação do computador é " + pontosPc + ".\nVocê ganhou!!")
  } else if (pontosUser > 21 && pontosPc <= 21) {
    alert("Suas cartas são " + cartasUser + ". Sua pontuação é " + pontosUser + ".\nAs cartas do computador são " + cartasPc + ". A pontuação do computador é " + pontosPc + ".\nO computador ganhou!")
  } else {
    alert("Suas cartas são " + cartasUser + ". Sua pontuação é " + pontosUser + ".\nAs cartas do computador são " + cartasPc + ". A pontuação do computador é " + pontosPc + ".\nO jogo empatou.")
  }

} else {
  console.log("O jogo acabou.")
}
