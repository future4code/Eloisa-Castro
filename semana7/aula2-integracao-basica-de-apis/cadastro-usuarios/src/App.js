import React from 'react';
import axios from 'axios'
import './App.css';
import BotaoPagina from './components/BotaoPagina/BotaoPagina';
import ContainerForm from './components/ContainerForm/ContainerForm';
import ContainerUsuarios from './components/ContainerUsuarios/ContainerUsuarios';

function App() {
  return (
    <div>
      <BotaoPagina />
      <ContainerForm />
      <ContainerUsuarios />
    </div>
  );
}

export default App;
