import React from 'react';
import styled from 'styled-components'

const ContainerProgesso = styled.div`
    width: 30%;
    border: 1px solid blue;
    border-radius: 5px;
    padding: 10px;

`

const HeaderProgresso = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #F2F3F5;
`

const ImagemProgressso = styled.img`
    height: 60px;
`

const ProgressoPorTipo = styled.div`
    margin-top: 10px;
`

function ComponentProgresso (props) {
    
    return(
        <ContainerProgesso>
            <HeaderProgresso>
                <h3>Progresso</h3>
                <ImagemProgressso
                    src="https://365psd.com/wp-content/uploads/2012/09/progress_preview.png"
                />
            </HeaderProgresso>
            <ProgressoPorTipo>
                <h4>Tarefas individuais:</h4>
                <p>{props.individualFinalizada} / {props.individualTotal} </p>
            </ProgressoPorTipo>
            <ProgressoPorTipo>
                <h4>Tarefas em grupo:</h4>
                <p>{props.grupoFinalizada} / {props.grupoTotal} </p>
            </ProgressoPorTipo>
        </ContainerProgesso>
    )
}

export default ComponentProgresso;