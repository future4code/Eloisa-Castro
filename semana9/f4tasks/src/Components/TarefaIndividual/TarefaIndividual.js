import React from 'react';
import PanoramaFishEye from '@material-ui/icons/PanoramaFishEye';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import DeleteForever from '@material-ui/icons/DeleteForever';
import styled from 'styled-components';
import { connect } from "react-redux";
import { completarTarefa } from '../../actions/todos';
import { excluirTarefa } from '../../actions/todos';


const ContainerTarefa = styled.div`
    display: flex;
    border: 1px solid gray;
    width: 100%;
    justify-content: space-between;
    padding: 5px;
    background-color: white;
`;

const TextoDaTarefa = styled.p`
    width: 90%;
    margin: 0 10px;
    text-align: left;
    background-color: white;
    color: ${ props => {
        if (props.estilo) {
            return 'gray'
        }
    }};
    text-decoration: ${ props => {
        if (props.estilo) {
            return 'line-through'
        }
    }};
    
`;

const StyledPanoramaFishEye = styled(PanoramaFishEye)`
    background-color: white;
`;

const StyledCheckCircleOutline = styled(CheckCircleOutline)`
    background-color: white;
    color: gray;
`;

const StyledDeleteForever = styled(DeleteForever)`
    background-color: white;
`;

function TarefaIndividual(props) {
    const lista = props.listaDeTarefas
    const tarefas = lista.map( tarefa => {
        return (
            <ContainerTarefa key={tarefa.id}>
                {tarefa.statusTarefa ?
                    <StyledCheckCircleOutline onClick={ () => props.completarTarefa(tarefa.id)} /> :
                    <StyledPanoramaFishEye onClick={ () => props.completarTarefa(tarefa.id)} />}
                <TextoDaTarefa estilo={tarefa.statusTarefa}>{tarefa.textoTarefa}</TextoDaTarefa>
                <StyledDeleteForever onClick={ () => props.excluirTarefa(tarefa.id)} />
            </ContainerTarefa>
        )
    })
    return (
        <div>
            {tarefas}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        listaDeTarefas: state.todos.listaDeTarefas
    }

}

const mapDispatchToProps = dispatch => {
    return {
        completarTarefa: idTarefa => dispatch(completarTarefa(idTarefa)),
        excluirTarefa: idTarefa => dispatch(excluirTarefa(idTarefa))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TarefaIndividual);