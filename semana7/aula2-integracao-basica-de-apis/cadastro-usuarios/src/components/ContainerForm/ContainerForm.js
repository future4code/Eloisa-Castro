import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const FormContainer = styled.div`
    width: 400px;
    border: 1px solid purple;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 10px;
    margin-top: 15px;
`

const LabelForm = styled.label`
    width: 18%;
    margin-bottom: 15px;
`

const InputForm = styled.input`
    width: 80%
    margin-bottom: 15px;
`

const urlBase = 'https://us-central1-future4-users.cloudfunctions.net/api'

class ContainerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputNome: "",
            inputEmail: "",
        }
    }

    aoAlterarInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    aoSalvarUsuario = async () => {
        const novoUsusario = {
            name: this.state.inputNome,
            email: this.state.inputEmail
        }

        const requestHeader = {
            headers: {
                'api-token': 'eloisa'
            }
        }

        try {
            await axios.post(`${urlBase}/users/createUser`, novoUsusario, requestHeader)
            this.setState({
                inputNome: "",
                inputEmail: "",
            })
            window.alert("Usuário cadastrado com sucesso")
        } catch (error) {
            console.log("erro")
            console.log(error)
            window.alert("Erro ao cadastrar usuário.")
        }
    }

    render() {
        return (
            <FormContainer>
                <LabelForm>Nome:</LabelForm>
                <InputForm name="inputNome" value={this.state.inputNome} onChange={this.aoAlterarInput} type="text" />
                <LabelForm>E-mail:</LabelForm>
                <InputForm name="inputEmail" value={this.state.inputEmail} onChange={this.aoAlterarInput}  type="text" />
                <button onClick={this.aoSalvarUsuario}>Salvar</button>
            </FormContainer>
        )
    }
}

export default ContainerForm;