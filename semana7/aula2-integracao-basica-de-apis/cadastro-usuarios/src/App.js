import React from 'react';
import axios from 'axios'
import './App.css';
import ContainerForm from './components/ContainerForm/ContainerForm';
import ContainerUsuarios from './components/ContainerUsuarios/ContainerUsuarios';

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
      <div>
        <button onClick={this.aoClicarParaTrocarDePagina}>{textoBotao}</button>
        <ConteudoExibido />
      </div>
    );
  }
}

export default App;
