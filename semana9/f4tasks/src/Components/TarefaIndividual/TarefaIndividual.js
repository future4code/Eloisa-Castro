import React from 'react';
import PanoramaFishEye from '@material-ui/icons/PanoramaFishEye';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import DeleteForever from '@material-ui/icons/DeleteForever';
import styled from 'styled-components';

const MainContainer = styled.div`
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
`;

const StyledPanoramaFishEye = styled(PanoramaFishEye)`
    background-color: white;
`;

const StyledDeleteForever = styled(DeleteForever)`
    background-color: white;
`;

function TarefaIndividual() {
    return (
        <MainContainer>
            <StyledPanoramaFishEye />
            <TextoDaTarefa>Texto da tarefa</TextoDaTarefa>
            <StyledDeleteForever />
        </MainContainer>
    )
}

export default TarefaIndividual;