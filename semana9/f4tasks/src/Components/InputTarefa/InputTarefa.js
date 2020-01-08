import React from 'react';
import styled from 'styled-components';

const InputDaTarefa = styled.input`
    padding: 10px 20px;
    width: 100%;
    background-color: white;
    border: 1px solid gray;
`;

function InputTarefa() {
    return(
        <div>
            <InputDaTarefa placeholder="O que tem que ser feito?" />
        </div>
    )
}

export default InputTarefa;