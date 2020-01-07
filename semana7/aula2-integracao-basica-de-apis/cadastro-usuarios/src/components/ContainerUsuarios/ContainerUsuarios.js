import React from 'react'
import styled from 'styled-components'
import UsuarioUnico from './UsuarioUnico'
import axios from 'axios'

const UsusariosContainer = styled.div`
    width: 300px;
    margin-top: 15px;
    border: 1px solid green;
    border-radius: 10px;
    text-align: center;
    padding: 10px;
`

const urlBase = 'https://us-central1-future4-users.cloudfunctions.net/api'

class ContainerUsuarios extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listaUsuarios: []
        }
    }

    mostrarUsuarios = async () => {
        const requestHeader = {
            headers: {
                'api-token': 'eloisa'
            }
        }
        const response = await axios.get(`${urlBase}/users/getAllUsers`, requestHeader)
        this.setState({ listaUsuarios: response.data.result })
    }

    componentDidMount() {
        this.mostrarUsuarios()
    }

    render() {
        return (
            <UsusariosContainer>
                <h2>Usuários Cadastrados:</h2>
                {this.state.listaUsuarios.map( user => (
                   <UsuarioUnico usuario={user} aoDeletarUsuario={this.mostrarUsuarios} />
                ))}
            </UsusariosContainer>

        )
    }
}

export default ContainerUsuarios;