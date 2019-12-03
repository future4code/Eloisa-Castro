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

function PagEtapaTres() {
    return (
        <MainContainer>
            <TituloForm>ETAPA 3 - Informações Gerais de Ensino</TituloForm>
            <LabelForm>1. Por que você não terminou um curso de graduação?</LabelForm>
            <InputForm />
            <LabelForm>2. Você fez algum curso complementar?</LabelForm>
            <SelectForm>
                <option>Curso Técnico</option>
                <option>Curso de inglês</option>
                <option>Não fiz nenhum curso complementar</option>
            </SelectForm>
        </MainContainer>
    )
}

export default PagEtapaTres;
