import React from 'react';
import styled from 'styled-components'

const ContainerTarefa = styled.div`
    border: 1px solid green;
    border-radius: 5px;
    width: 68%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const ContainerDetalhes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 60%;
`

const ContainerBotoes = styled.div`

`

const BotaoTarefa = styled.button`
    padding: 2px 15px;
    margin: 10px 15px 0px 0px;
`

function ComponentTarefa(props) {

    const aceitarTarefaProposta = () => {
        props.aceitarTarefa()
    }
    const rejeitarTarefaProposta = () => {
        props.rejeitarTarefa()
    }
    
    return(
        <ContainerTarefa>
            <ContainerDetalhes>
                <p><b>Atividade:</b> {props.tarefa.activity}</p>
                <p><b>Tipo:</b> {props.tarefa.type}</p>
                <p><b>Número de participantes:</b> {props.tarefa.participants}</p>
            </ContainerDetalhes>
            <ContainerBotoes>
                <BotaoTarefa onClick={aceitarTarefaProposta} >Aceitar</BotaoTarefa>
                <BotaoTarefa onClick={rejeitarTarefaProposta}>Recusar</BotaoTarefa>
            </ContainerBotoes>
        </ContainerTarefa>
    )
}

export default ComponentTarefa;