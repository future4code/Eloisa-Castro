import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 5px 0;
    border: 1px solid gray;
`;

const BotaoTarefas = styled.button`
    border: none;
    background-color: white;
    margin: 0 5px;
    padding: 5px;
`;

const BotaoFiltro = styled.button`
    border: none;
    background-color: white;
    padding: 5px;
    margin: 0 8px;
`;

const ContainerFiltros = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: white;

`;

function ContainerBotoes() {
    return (
        <MainContainer>
            <BotaoTarefas>
                Marcar todas como completas
            </BotaoTarefas>

            <ContainerFiltros>
                <BotaoFiltro>Todas</BotaoFiltro>
                <BotaoFiltro>Pendentes</BotaoFiltro>
                <BotaoFiltro>Completas</BotaoFiltro>
            </ContainerFiltros>

            <BotaoTarefas>
                Remover completas
            </BotaoTarefas>
        </MainContainer>
    )
}

export default ContainerBotoes;