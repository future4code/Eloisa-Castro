import React from 'react';
import styled from 'styled-components'

const FormContainer = styled.div`
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

function FormularioNovaTarefa() {
  return (
    <FormContainer>
        <InputTarefa type='text' placeholder='Insira a tarefa'/>
        <BotaoAdd>Adicionar</BotaoAdd>
    </FormContainer>
    
  );
}

export default FormularioNovaTarefa;