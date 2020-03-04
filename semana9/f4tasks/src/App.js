import React from 'react';
import styled from 'styled-components';
import './App.css';
import InputTarefa from './Components/InputTarefa/InputTarefa';
import TarefaIndividual from './Components/TarefaIndividual/TarefaIndividual';
import ContainerBotoes from './Components/ContainerBotoes/ContainerBotoes';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

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

const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <MainContainer>
        <TextoTitulo>F4Tasks</TextoTitulo>
        <InputTarefa />
        <TarefaIndividual />
        <ContainerBotoes />
      </MainContainer>
    </Provider>
  );
}

export default App;
