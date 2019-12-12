import React from 'react'
import styled from 'styled-components'

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

    render() {
        return (
            <FormContainer>
                <LabelForm>Nome:</LabelForm>
                <InputForm name="inputNome" value={this.state.inputNome} onChange={this.aoAlterarInput} type="text" />
                <LabelForm>E-mail:</LabelForm>
                <InputForm name="inputEmail" value={this.state.inputEmail} onChange={this.aoAlterarInput}  type="text" />
                <button>Salvar</button>
            </FormContainer>
        )
    }
}

export default ContainerForm;