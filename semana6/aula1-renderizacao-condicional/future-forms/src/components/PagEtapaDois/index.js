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

function PagEtapaDois() {
    return (
        <MainContainer>
            <TituloForm>ETAPA 2 - Informações do Ensino Superior</TituloForm>
            <LabelForm>1. Qual o curso?</LabelForm>
            <InputForm />
            <LabelForm>2. Qual a unidade de ensino?</LabelForm>
            <InputForm />
        </MainContainer>
    )
}

export default PagEtapaDois;
