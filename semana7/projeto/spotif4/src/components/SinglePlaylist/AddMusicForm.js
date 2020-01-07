import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AddMusicContainter = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
    border: 1px dashed darkgray;
    padding: 5px 0;
`

const AddMusicInput = styled.input`
    padding: 2px 5px;
    width: 28%;
`

const SaveMusicButton = styled.button`
    padding: 2px;
`

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api"

class AddMusicForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputNome: '',
            inputArtista: '',
            inputLink: '',
        }
    }

    controlInput = (e) => {
        const nome = e.target.name
        const valor = e.target.value

        this.setState({ [nome]: valor })
    }

    saveNewMusic = async () => {
        const requestHeader = {
            headers: {
                auth: this.state.userNameToken
            }
        }

        const requestBody = {
            'playlistId': this.props.idPlaylist,
            'music': { 
                'name': this.state.inputNome, 
                'artist': this.state.inputArtista,
                'url': this.state.inputLink
            }
        }

        try {
            await axios.put(`${baseURL}/playlists/addMusicToPlaylist`, requestHeader, requestBody)
            this.setState ({
                inputNome: '',
                inputArtista: '',
                inputLink: '',
            })
            this.props.showAllMusics(this.props.idPlaylist, this.props.namePlaylist)
        } catch (error) {
            window.alert("Erro ao adicionar música.")
        }
    }

    render() {
        return(
            <AddMusicContainter>
                <AddMusicInput 
                    name="inputNome"
                    onChange={this.controlInput}
                    value={this.state.inputNome}
                    placeholder="Nome"
                />
                <AddMusicInput 
                    name="inputArtista"
                    onChange={this.controlInput}
                    value={this.state.inputArtista}
                    placeholder="Artista"
                />
                <AddMusicInput 
                    name="inputLink"
                    onChange={this.controlInput}
                    value={this.state.inputLink}
                    placeholder="Link do áudio"
                />
                <SaveMusicButton onClick={this.saveNewMusic}>Salvar</SaveMusicButton>
            </AddMusicContainter>
        )
    }
}

export default AddMusicForm;