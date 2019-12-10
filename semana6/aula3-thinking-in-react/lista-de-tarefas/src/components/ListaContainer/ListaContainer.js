import React from 'react';
import FormularioNovaTarefa from '../FormularioNovaTarefa/FormularioNovaTarefa';
import ListaDeTarefas from '../ListaDeTarefas/ListaDeTarefas';
import styled from 'styled-components'

const MainContainer = styled.div`
  width: 700px;
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1.5px dashed black;
  padding-top: 10px;
`
const arrayTarefas = [
  { id: Date.now(),
    texto: 'texto da tarefa',
    statusCompleto: false,
  },
  { id: Date.now(),
    texto: 'texto da tarefa 2',
    statusCompleto: false,
  }
]

class ListaContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      statusTarefa: false,
      arrayTarefas: [],
    }
  }


  mudaStatusTarefa = (idTarefa) => {
    const arrayTarefasCopy = this.state.arrayTarefas.map( tarefa => {
      if (tarefa.id === idTarefa) {
        const tarefaCopy = {...tarefa}
        tarefaCopy.statusCompleto = !tarefa.statusCompleto
        return tarefaCopy
      }
      return tarefa
    })
    this.setState({arrayTarefas: arrayTarefasCopy})
  }

  addTarefa = () => {
    if(this.state.tarefaTexto !== ""){
      const novaTarefa = { id: Date.now(), texto: this.state.tarefaTexto, completa: false }
      const arrayTarefasCopy = [...this.state.arrayTarefas, novaTarefa]
      this.setState({
        arrayTarefas: arrayTarefasCopy,
        tarefaTexto: "",
      });
    } else {
      window.alert("Você deve preencher a tarefa.")
    }
  }
  
  render() {
    return (
        <MainContainer>
            <h1>Lista de Tarefas</h1>
            <FormularioNovaTarefa aoAddTarefa={this.addTarefa}/>
            <ListaDeTarefas dados={arrayTarefas} aoClicarNaTarefa={this.mudaStatusTarefa}/>
        </MainContainer>
    );
  }
}

export default ListaContainer;
