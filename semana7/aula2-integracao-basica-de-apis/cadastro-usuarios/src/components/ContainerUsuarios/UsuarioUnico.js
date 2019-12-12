import React from 'react'
import styled from 'styled-components'

const UsuarioUnicoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dashed black;
    padding-bottom: 5px;
    margin-top: 10px;
`

function UsuarioUnico(){
    return (
        <UsuarioUnicoContainer>
            <p>Nome</p>
            <p>X</p>
        </UsuarioUnicoContainer>
    )
}

export default UsuarioUnico;