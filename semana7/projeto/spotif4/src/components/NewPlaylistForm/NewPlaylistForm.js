import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const NewPlaylistContainer = styled.div`
    display: flex;
    width: 450px;
    border: 1px dashed #624568;
    flex-direction: column;
    margin: 15px auto;
    padding: 10px;
    align-items: center;
`

const DataForm = styled.form`
    margin: 20px 0;
`

const NewPlaylistInput = styled.input`
    margin-left: 10px;
    width: 290px;
    padding: 3px 5px;
`

const SaveButton = styled.button`
    padding: 3px 15px;
`
const baseUrl = 'https://us-central1-spotif4.cloudfunctions.net/api'

class NewPlaylistForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            newPlaylistName: ''
        }
    }

    changeInputPlaylistName = (e) => {
        this.setState({ newPlaylistName: e.target.value })
    }

    saveNewPlaylist = async () => {
        const authName = "'" + this.props.tokenAuth + "'"

        const requestHeader = {
            headers: {
                'auth': authName
            }
        }

        const requestBody = {
            name: this.state.newPlaylistName,
        }

        try {
            await axios.post(`${baseUrl}/playlists/createPlaylist`, requestHeader, requestBody)
            this.setState({ newPlaylistName: '' })
            window.alert("Playlist cadastrada com sucesso!")
        } catch (error) {
            window.alert("Erro ao cadastrar playlist.")
        }
    }

    render() {
        return (
            <NewPlaylistContainer>
                <h3>Criar nova playlist:</h3>
                <DataForm>
                    <label>Nome:</label>
                    <NewPlaylistInput
                        type="text"
                        value={this.state.newPlaylistName}
                        onChange={this.changeInputPlaylistName}    
                    />
                </DataForm>
                <SaveButton onClick={this.saveNewPlaylist}>Salvar</SaveButton>
            </NewPlaylistContainer>
        )
    }
}

export default NewPlaylistForm;