import React from 'react';
import './App.css';
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

const ControlContainer = styled.div`
  background-color: #DD8AEC;
  width: 100%;
  margin-top: 10px;
  display: flex;
  padding: 20px 0;
  justify-content: center;
`

const InputTarefa = styled.input`
  padding: 3px 8px;
  margin-right: 5px;  
  border-radius: 5px;
  border: none;
  width: 400px;
`

const BotaoAdd = styled.button`
  padding: 3px 10px;
  border-radius: 5px;
  border: 1px solid darkgray;
`

const ListContainer = styled.div`
  background-color: #DB0087;
  width: 100%;
  padding: 8px;
`

const FilterContainer = styled.form`
  display: flex;
  align-items: center;
  font-size: 0.9em;
  background-color: white;
  padding: 5px;
  margin-bottom: 8px;
`

const LabelFiltro = styled.label`
  margin-right: 10px;
`

const InputFiltro = styled.input`
  margin-right: 5px;
`

const EspacoFiltro = styled.span`
  margin-right: 25px;
`

const ListaTarefas = styled.ul`
  background-color: white;
  padding: 5px 40px;
  min-height: 50px;
`

const TarefaIndiviual = styled.li`
  margin: 5px 0;
  color: ${props => {
    if (props.statusTarefa) {
      return 'lightgrey'
    } else {
      return 'black'
    }
  }};
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tarefaTexto: '',
      arrayTarefas: [],
      controleFiltro: 'nenhum',
    }
  }

  aoDigitarTarefa = (e) => {
    this.setState({ tarefaTexto: e.target.value })
  }

  aoClicarAdicionar = () => {
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

  aoFiltrar = (e) => {
    this.setState({ controleFiltro: e.target.value })
  }

  completarTarefa = (arg1) => {
    const arrayTarefasCopy = [...this.state.arrayTarefas]
    for (const item of arrayTarefasCopy) {
      if (item.id === arg1) {
        item.completa = !item.completa
        this.setState({ arrayTarefas: arrayTarefasCopy})
      }
    }
  }

  componentDidUpdate() {
    const arrayTarefasEmString = JSON.stringify(this.state.arrayTarefas)
    localStorage.setItem("tarefasSalvas", arrayTarefasEmString)
  }

  componentDidMount() {
    const tarefasComoString = localStorage.getItem("tarefasSalvas")
    const tarefasComoArray = JSON.parse(tarefasComoString)
    this.setState({arrayTarefas: tarefasComoArray})
  }

  render() {
    let listaRenderizada
    switch (this.state.controleFiltro) {
      case 'nenhum':
        listaRenderizada = this.state.arrayTarefas.map( el => {
          return (
            <TarefaIndiviual statusTarefa={el.completa} key={el.id} onClick={() => this.completarTarefa(el.id)}>{el.texto}</TarefaIndiviual>
          )})
        break;
      case 'completas':
        const arrayCompletas = this.state.arrayTarefas.filter( el => {
          return el.completa
        })
        listaRenderizada = arrayCompletas.map(el => {
          return (
            <TarefaIndiviual statusTarefa={el.completa} key={el.id} onClick={() => this.completarTarefa(el.id)}>{el.texto}</TarefaIndiviual>
        )})
        break;
      case 'pendentes':
        const arrayPendentes = this.state.arrayTarefas.filter( el => {
          return !el.completa
        })
        listaRenderizada = arrayPendentes.map(el => {
          return (
            <TarefaIndiviual statusTarefa={el.completa} key={el.id} onClick={() => this.completarTarefa(el.id)}>{el.texto}</TarefaIndiviual>
        )})
        break;
      
      default:
        break;
    };
    return (
      <MainContainer>
        <h1>Lista de Tarefas</h1>
        <ControlContainer>
          <InputTarefa type='text' value={this.state.tarefaTexto} onChange={this.aoDigitarTarefa} placeholder='Insira a tarefa'/>
          <BotaoAdd onClick={this.aoClicarAdicionar}>Adicionar</BotaoAdd>
        </ControlContainer>

        <ListContainer>
          <FilterContainer>
            <LabelFiltro>Filtrar: </LabelFiltro>
            <InputFiltro type='radio' name='filtro-tarefas' value='nenhum' checked={this.state.controleFiltro === 'nenhum'} onChange={this.aoFiltrar} />Nenhum<EspacoFiltro/>
            <InputFiltro type='radio' name='filtro-tarefas' value='completas' checked={this.state.controleFiltro === 'completas'} onChange={this.aoFiltrar} />Completas<EspacoFiltro/>
            <InputFiltro type='radio' name='filtro-tarefas' value='pendentes' checked={this.state.controleFiltro === 'pendentes'} onChange={this.aoFiltrar} />Pendentes
          </FilterContainer>
          <ListaTarefas>
              {listaRenderizada}
          </ListaTarefas>
        </ListContainer>

      </MainContainer>
    );
  }
}

export default App;
