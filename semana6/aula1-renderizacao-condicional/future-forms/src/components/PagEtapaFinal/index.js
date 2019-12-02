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

function PagEtapaFinal() {
    return (
        <MainContainer>
            <TituloForm>FORMULÁRIO FINALIZADO</TituloForm>
            <p>Muito obrigado por responder nosso formulário! Em breve entraremos em contato.</p>
        </MainContainer>
    )
}

export default PagEtapaFinal;
