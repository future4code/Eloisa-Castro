import React from 'react';
import styled from 'styled-components';
import PlaylistItem from './PlaylistItem';

const ContainerPlaylists = styled.div`
    display: flex;
    width: 450px;
    border: 1px dashed #624568;
    flex-direction: column;
    margin: 15px auto;
    padding: 10px;
    align-items: center;
`

const Playlist = styled.ol`
`

function PlaylistsContainer(props) {
    return(
        <ContainerPlaylists>
            <h3>Minhas Playlists</h3>
            <Playlist>
                {props.playlist.map( item => {
                    return (
                        <PlaylistItem
                            itemOfPlaylist={item}
                            deleteItem={props.onDeleteItem}
                            token={props.token}
                            key={item.id}
                            playlistDetails={props.seeMusicsOnPlaylist}
                        />
                    )
                })}
            </Playlist>
        </ContainerPlaylists>
    )
}

export default PlaylistsContainer;