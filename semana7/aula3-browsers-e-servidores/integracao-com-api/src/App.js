import React from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios'
import ComponentTarefa from './components/ComponentTarefa/ComponetTarefa';
import ComponentProgresso from './components/ComponentProgresso/ComponentProgresso';

const MainContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ContainerForm = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

const InputParticipantes = styled.input`
  width: 250px;
  padding: 2px;
  margin-right: 15px;
`

const BotaoSolicitar = styled.button`
  padding: 2px 20px;
`

const baseURL = "http://www.boredapi.com/api/activity?"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numeroParticipantes: '',
      tarefaSolicitada: {},
      tarefasIndividuaisFinalizadas: 0,
      tarefasIndividuaisTotais: 0,
      tarefasGrupoFinalizadas: 0,
      tarefasGrupoTotais: 0,
    }
  }

  handleNumeroParticipantes = (e) => {
    const numeroDeParticipantes = e.target.value
    this.setState({ numeroParticipantes: numeroDeParticipantes })
  }

  solicitarTarefa = async () => {
    if (this.state.numeroParticipantes !== '') {
      const response = await axios.get(`${baseURL}participants=${this.state.numeroParticipantes}`) 
      this.setState({
        tarefaSolicitada: response.data,
        numeroParticipantes: '',
      })
    }
  }

  aoAceitarTarefa = () => {
    let novoNumeroTarefasFinalizadas
    let novoNumeroTarefasTotal
    if (this.state.tarefaSolicitada.participants !== undefined) {
      if (this.state.tarefaSolicitada.participants === 1) {
        novoNumeroTarefasFinalizadas = this.state.tarefasIndividuaisFinalizadas + 1
        novoNumeroTarefasTotal = this.state.tarefasIndividuaisTotais + 1
        this.setState({
          tarefasIndividuaisFinalizadas: novoNumeroTarefasFinalizadas,
          tarefasIndividuaisTotais: novoNumeroTarefasTotal,
          tarefaSolicitada: {},
        })
      } else {
        novoNumeroTarefasFinalizadas = this.state.tarefasGrupoFinalizadas + 1
        novoNumeroTarefasTotal = this.state.tarefasGrupoTotais + 1
        this.setState({
          tarefasGrupoFinalizadas: novoNumeroTarefasFinalizadas,
          tarefasGrupoTotais: novoNumeroTarefasTotal,
          tarefaSolicitada: {},
        })
      }
    }
  }

  aoRejeitarTarefa = () => {
    let novoNumeroTarefasTotal
    if (this.state.tarefaSolicitada.participants !== undefined) {
      if (this.state.tarefaSolicitada.participants === 1) {
        novoNumeroTarefasTotal = this.state.tarefasIndividuaisTotais + 1
        this.setState({
          tarefasIndividuaisTotais: novoNumeroTarefasTotal,
          tarefaSolicitada: {},
        })
      } else {
        novoNumeroTarefasTotal = this.state.tarefasGrupoTotais + 1
        this.setState({
          tarefasGrupoTotais: novoNumeroTarefasTotal,
          tarefaSolicitada: {},
        })
      }
    }
  }

  render() {
    return (
      <MainContainer>
        <ContainerForm>
          <InputParticipantes
            type="number" min="1" max="5"
            placeholder={"Insira o número de participantes [1-5]"}
            value={this.state.numeroParticipantes}
            onChange={this.handleNumeroParticipantes}
          />
          <BotaoSolicitar onClick={this.solicitarTarefa}>Solicitar tarefa</BotaoSolicitar>
        </ContainerForm>
        <ComponentTarefa
          tarefa={this.state.tarefaSolicitada}
          aceitarTarefa={this.aoAceitarTarefa}
          rejeitarTarefa={this.aoRejeitarTarefa}
        />
        <ComponentProgresso
          individualTotal={this.state.tarefasIndividuaisTotais}
          individualFinalizada={this.state.tarefasIndividuaisFinalizadas}
          grupoTotal={this.state.tarefasGrupoTotais}
          grupoFinalizada={this.state.tarefasGrupoFinalizadas}
        />
      </MainContainer>
    );
  }
}

export default App;
