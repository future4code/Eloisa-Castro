import React from 'react'
import styled from 'styled-components'
import UsuarioUnico from './UsuarioUnico'

const UsusariosContainer = styled.div`
    width: 300px;
    margin-top: 15px;
    border: 1px solid green;
    border-radius: 10px;
    text-align: center;
    padding: 10px;
`

function ContainerUsuarios(){
    return (
        <UsusariosContainer>
            <h2>Usuários Cadastrados:</h2>
            <UsuarioUnico />
            <UsuarioUnico />
        </UsusariosContainer>

    )
}

export default ContainerUsuarios;