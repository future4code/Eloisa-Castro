import React from 'react';
import './App.css';
import styled from 'styled-components'
import ContainerForm from './components/ContainerForm/ContainerForm';
import ContainerUsuarios from './components/ContainerUsuarios/ContainerUsuarios';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BotaoPagina = styled.button`
  margin-top: 5px;
  padding: 2px 20px;
`

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      setupPagina: "cadastro"
    }
  }

  aoClicarParaTrocarDePagina = () => {
    if (this.state.setupPagina === "cadastro") {
      this.setState({ setupPagina: "lista" })
    } else {
      this.setState({ setupPagina: "cadastro" })
    }
  }

  render() {
    const textoBotao = this.state.setupPagina === "cadastro" ? "Ir para lista de usuários" : "Ir para formulário de cadastro"
    const ConteudoExibido = this.state.setupPagina === "cadastro" ? ContainerForm : ContainerUsuarios
    return (
      <MainContainer>
        <BotaoPagina onClick={this.aoClicarParaTrocarDePagina}>{textoBotao}</BotaoPagina>
        <ConteudoExibido />
      </MainContainer>
    );
  }
}

export default App;
