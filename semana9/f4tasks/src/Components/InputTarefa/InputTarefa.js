import React from 'react';
import styled from 'styled-components';
import { criarNovaTarefa } from '../../actions/todos';
import { connect } from 'react-redux';

const InputDaTarefa = styled.input`
    padding: 10px 20px;
    width: 100%;
    background-color: white;
    border: 1px solid gray;
`;

class InputTarefa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textoInput: "",
        }
    }

    aoAlterarInput = (e) => {
        const novoTexto = e.target.value
        this.setState({ textoInput: novoTexto})
    }
    
    aoClicarEnter = (e) => {
        if (this.state.textoInput !== "") {
            if (e.key === 'Enter') {
                this.props.adicionarTarefa(this.state.textoInput)
                this.setState({ textoInput: ''})
            }
        }
    } 

    render() {
        return(
            <div>
                <InputDaTarefa
                    onKeyPress={this.aoClicarEnter}
                    placeholder="O que tem que ser feito?"
                    value={this.state.textoInput}
                    onChange={this.aoAlterarInput}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        adicionarTarefa: novaTarefa => dispatch(criarNovaTarefa(novaTarefa))
      };
}

export default connect(null, mapDispatchToProps)(InputTarefa);