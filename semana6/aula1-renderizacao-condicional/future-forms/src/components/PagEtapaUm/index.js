import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TituloForm = styled.h2`
    margin: 15px 0;
`

const LabelForm = styled.label`
    margin-bottom: 5px;
`

const InputForm = styled.input`
    width: 400px;
    margin-bottom: 10px;
`

const SelectForm = styled.select`
    width: 400px;
    margin-bottom: 10px;
`

function PagEtapaUm() {
    return (
        <MainContainer>
            <TituloForm>ETAPA 1 - Dados Gerais</TituloForm>
            <LabelForm>1. Nome:</LabelForm>
            <InputForm />
            <LabelForm>2. Idade:</LabelForm>
            <InputForm />
            <LabelForm>3. Email:</LabelForm>
            <InputForm />
            <LabelForm>4. Qual o seu grau de escolaridade?</LabelForm>
            <SelectForm>
                <option value="medio-incompleto">Ensino Médio Incompleto</option>
                <option value="medio-completo">Ensino Médio Completo</option>
                <option value="superior-incompleto">Ensino Superior Incompleto</option>
                <option value="superior-completo">Ensino Superior Completo</option>
            </SelectForm>
        </MainContainer>
    )
}

export default PagEtapaUm;
