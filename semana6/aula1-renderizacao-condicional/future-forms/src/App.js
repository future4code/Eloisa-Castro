import React from 'react';
import './App.css';
import styled from 'styled-components'
import PagEtapaDois from './components/PagEtapaDois'
import PagEtapaFinal from './components/PagEtapaFinal';
import PagEtapaUm from './components/PagEtapaUm';
import PagEtapaTres from './components/PagEtapaTres';

const BotaoProx = styled.button`
  padding: 3px 15px;
  margin-top: 15px;
  border-radius: 5px;
  border: 1px solid darkgray;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagina: 1,
    }
  }

  aoClicarProxima = () => {
    const paginaCopy = this.state.pagina + 1
    this.setState({pagina: paginaCopy})
  }

  render() {
    let tela
    switch (this.state.pagina) {
      case 1:
        tela = (<PagEtapaUm />)
        break;
      case 2:
        tela = (<PagEtapaDois />)
        break;
      case 3:
        tela = (<PagEtapaTres />)
        break;
      case 4:
        tela = (<PagEtapaFinal />)
        break;
      default:
        break;
    }
    return (
    <div className="App">
      {tela}
      {this.state.pagina < 4 && <BotaoProx onClick={this.aoClicarProxima}>Próxima Etapa</BotaoProx>}
    </div>
  );
    }
}

export default App;
