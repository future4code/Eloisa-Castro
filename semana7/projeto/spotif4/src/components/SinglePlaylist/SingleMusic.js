import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SingleMusicContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px dotted black;
    padding: 0 5px 5px 5px;
    margin-top: 15px;
`

const ButtonsContainer = styled.div`
    display: flex;
    align-items:center;
`

const SingleMusicButtons = styled.button`
    padding: 0 8px;
    margin-left: 8px;
`

const MusicAudio = styled.audio`
    height: 30px;
    width: 250px;
`

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api"

function SingleMusic(props) {
    const removeMusic = async () => {
        const requestHeader = {
            headers: {
                auth: props.token
            }
        }

        try {
            await axios.delete(
                `${baseURL}/playlists/removeMusicFromPlaylist?playlistId=${props.idPlaylist}&musicId=${props.eachMusic.id}`, 
                requestHeader
            )
            props.showAllMusics()
        } catch (error) {
            window.alert("Erro ao deletar a música.")
        }
    }

    return(
        <SingleMusicContainer>
            <li type="none">{props.eachMusic.name}</li>
            <ButtonsContainer>
                <MusicAudio src={props.eachMusic.url} controls />
                <SingleMusicButtons onClick={removeMusic}>Remover</SingleMusicButtons>
            </ButtonsContainer>
        </SingleMusicContainer>
    )
}

export default SingleMusic;