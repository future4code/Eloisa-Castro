import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const UsuarioUnicoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dashed black;
    padding-bottom: 5px;
    margin-top: 10px;
`

const urlBase = 'https://us-central1-future4-users.cloudfunctions.net/api'

function UsuarioUnico(props){
    const aoClicarDeletarUsuario = async () => {
        const url = `${urlBase}/users/deleteUser?id=${props.usuario.id}`
        const requestHeader = {
            headers: {
                'api-token': 'eloisa'
            }
        }
        try {
            await axios.delete(url, requestHeader)
            props.aoDeletarUsuario()
            window.alert("Usuário deletado com sucesso!")
        } catch (error) {
            window.alert("Erro ao deletar o usuário.")
        }
    }
    
    return (
        <UsuarioUnicoContainer>
            <p>{props.usuario.name}</p>
            <p onClick={aoClicarDeletarUsuario} >X</p>
        </UsuarioUnicoContainer>
    )
}

export default UsuarioUnico;