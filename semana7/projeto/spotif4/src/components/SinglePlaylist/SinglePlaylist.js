import React from 'react';
import styled from 'styled-components';
import SingleMusic from './SingleMusic';
import AddMusicForm from './AddMusicForm';

const SinglePlaylistContainer = styled.div`
    display: flex;
    width: 800px;
    border: 1px dashed #624568;
    flex-direction: column;
    margin: 15px auto;
    padding: 10px;
    align-items: center;
`

const HeaderSinglePlaylist = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`

const TitleHeader = styled.h3`
    width: 80%;
    text-align: center;
`

const AddButton = styled.button`
    padding: 3px 15px;
    width: 20%;
`

class SinglePlaylist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addMusicStatus: false,
        }
    }

    toAddMusic = () => {
        this.setState({ addMusicStatus: true})
    }

    render() {
        return(
            <SinglePlaylistContainer>
                <HeaderSinglePlaylist>
                    <TitleHeader>{this.props.nameOfPlaylist}</TitleHeader>
                    <AddButton onClick={this.toAddMusic}>Adicionar Música</AddButton>
                </HeaderSinglePlaylist>
                {this.state.addMusicStatus &&
                    <AddMusicForm
                        showAllMusics={this.props.showAllMusics}
                        idPlaylist={this.props.idOfPlaylist}
                        namePlaylist={this.props.nameOfPlaylist}
                    />}
                {this.props.listOfMusics.map (music => {
                    return (
                        <SingleMusic 
                            showAllMusics={this.props.showAllMusics} 
                            tokenAuth={this.props.token}
                            idPlaylist={this.props.idOfPlaylist}
                            key={music.id}
                            eachMusic={music}
                    /> )
                })}
            </SinglePlaylistContainer>
        )
    }
}

export default SinglePlaylist;