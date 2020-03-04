import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
    alterarStatusTodas,
    deletarTarefasCompletas,
    filtrarTarefasPendentes,
    filtrarTodasTarefas,
    filtrarTarefasCompletas
    } from '../../actions/todos'

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

function ContainerBotoes(props) {
    return (
        <MainContainer>
            <BotaoTarefas onClick={() => props.completaTodas()}>
                Marcar todas como completas
            </BotaoTarefas>

            <ContainerFiltros>
                <BotaoFiltro onClick={() => props.filtraTodasTarefas()}>Todas</BotaoFiltro>
                <BotaoFiltro onClick={() => props.filtraIncompletas()}>Pendentes</BotaoFiltro>
                <BotaoFiltro onClick={() => props.filtraCompletas()}>Completas</BotaoFiltro>
            </ContainerFiltros>

            <BotaoTarefas onClick={() => props.excluiCompletas()}>
                Remover completas
            </BotaoTarefas>
        </MainContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    completaTodas: () => dispatch(alterarStatusTodas()),
    excluiCompletas: () => dispatch(deletarTarefasCompletas()),
    filtraIncompletas: () => dispatch(filtrarTarefasPendentes()),
    filtraTodasTarefas: () => dispatch(filtrarTodasTarefas()),
    filtraCompletas: () => dispatch(filtrarTarefasCompletas())
})

export default connect(null, mapDispatchToProps)(ContainerBotoes);