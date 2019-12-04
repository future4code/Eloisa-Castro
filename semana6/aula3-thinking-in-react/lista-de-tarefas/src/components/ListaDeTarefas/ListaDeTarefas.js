import React from 'react';
import styled from 'styled-components'
import Tarefas from './Tarefas';
import FiltroDeLista from './FiltroDeLista';

const ListContainer = styled.div`
  background-color: #DB0087;
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
`


function ListaDeTarefas(props) {
  return (
    <ListContainer>
        <FiltroDeLista />
        <Tarefas listaDados={props.dados} aoClicar={props.aoClicarNaTarefa} />
    </ListContainer>

      
  );
}

export default ListaDeTarefas;