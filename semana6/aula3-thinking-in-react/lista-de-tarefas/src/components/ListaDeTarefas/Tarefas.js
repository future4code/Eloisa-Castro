import React from 'react';
import styled from 'styled-components'

const ListaTarefas = styled.ul`
  background-color: white;
  padding: 5px 40px;
  min-height: 50px;
  width: 100%;
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


class Tarefas extends React.Component {
  constructor(props) {
    super(props)
  }

  mudarStatusAoClicar = () => {
    this.props.aoClicar(this.props.key)
  }
  
  render() {
    const tarefaIndiviual = this.props.listaDados.map( tarefa => {
      return (
        <TarefaIndiviual key={tarefa.id} onClick={this.mudarStatusAoClicar} statusTarefa={tarefa.statusCompleto}>{tarefa.texto}</TarefaIndiviual>
      )
    });
    return (
      <ListaTarefas>
        {tarefaIndiviual}
      </ListaTarefas>
    );
  }
}

export default Tarefas;