import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const PlaylistItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 390px;
    border-bottom: 1px dotted black;
    padding: 0 5px 5px 5px;
    margin-top: 15px;
`

const DeletePlaylistButton = styled.button`
    padding: 0 10px;
`

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api"

function PlaylistItem(props) {
    const deleteItem = async () => {
        const requestHeader = {
            headers: {
                auth: props.token
            }
        }
        await axios.delete(`${baseURL}/playlists/deletePlaylist?playlistId=${props.itemOfPlaylist.id}`, requestHeader)
        props.deleteItem()
    }

    const seePlaylistDetails = () => {
        props.playlistDetails(3, props.itemOfPlaylist.id, props.itemOfPlaylist.name)
    }

    return(
        <PlaylistItemContainer>
            <li type="none" onDoubleClick={seePlaylistDetails}>{props.itemOfPlaylist.name}</li>
            <DeletePlaylistButton onClick={deleteItem}>Deletar</DeletePlaylistButton>
        </PlaylistItemContainer>
    )
}

export default PlaylistItem;