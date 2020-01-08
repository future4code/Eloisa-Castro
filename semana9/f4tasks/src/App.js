import React from 'react';
import styled from 'styled-components';
import './App.css';
import InputTarefa from './Components/InputTarefa/InputTarefa';
import TarefaIndividual from './Components/TarefaIndividual/TarefaIndividual';
import ContainerBotoes from './Components/ContainerBotoes/ContainerBotoes';

const MainContainer = styled.div`
  width: 700px;
  margin: 0 auto;
  text-align: center;
`;

const TextoTitulo = styled.p`
  font-size: 40px;
  color: orangered;
  font-weight: bold;
  margin: 15px 0;
`;

// action-creators

const addTarefa = (novaTarefa) => {
  return {
    type: 'ADICIONAR_TAREFA',
    payload: {
      tarefa: novaTarefa
    }
  }
}

const completarTarefa = (tarefaCompleta) => {
  return {
    type: 'COMPLETAR_TAREFA',
    payload: {
      tarefa: tarefaCompleta
    }
  }
}

const excluirTarefa = (tarefaExcluída) => {
  return {
    type: 'REMOVER_TAREFA',
    payload: {
      tarefa: tarefaExcluída
    }
  }
}

const completarTodasTarefas = () => {
  return {
    type: 'COMPLETAR_TUDO',
    payload: { }
  }
}

const removerCompletas = () => {
  return {
    type: 'REMOVER_COMPLETAS',
    payload: { }
  }
}

const filtrarTodasTarefas = () => {
  return {
    type: 'FILTRAR_TODAS',
    payload: { }
  }
}

const filtrarTarefasPendentes = () => {
  return {
    type: 'FILTRAR_PENDENTES',
    payload: { }
  }
}

const filtrarTarefasCompletas = () => {
  return {
    type: 'FILTRAR_COMPLETAS',
    payload: { }
  }
}

function App() {
  return (
    <MainContainer>
      <TextoTitulo>F4Tasks</TextoTitulo>
      <InputTarefa />
      <TarefaIndividual />
      <TarefaIndividual />
      <TarefaIndividual />
      <ContainerBotoes />
    </MainContainer>
  );
}

export default App;
