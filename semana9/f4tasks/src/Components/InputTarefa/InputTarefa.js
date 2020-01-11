import React from 'react';
import styled from 'styled-components';
import { addTarefa } from '../../actions/todos';
import { connect } from 'react-redux';

const InputDaTarefa = styled.input`
    padding: 10px 20px;
    width: 100%;
    background-color: white;
    border: 1px solid gray;
`;

function InputTarefa(props) {
    const aoClicarEnter = (e) => {
        if (e.target.value !== "") {
            if (e.key === 'Enter') {
                props.adicionarTarefa(e.target.value)
            }
        }
    } 

    return(
        <div>
            <InputDaTarefa onKeyPress={aoClicarEnter} placeholder="O que tem que ser feito?" />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        adicionarTarefa: novaTarefa => dispatch(addTarefa(novaTarefa))
      };
}

export default connect(null, mapDispatchToProps)(InputTarefa);