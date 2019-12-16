import React from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header/Header';
import NewPlaylistForm from './components/NewPlaylistForm/NewPlaylistForm';
import PlaylistsContainer from './components/PlaylistsContainer/PlaylistsContainer';
import SinglePlaylist from './components/SinglePlaylist/SinglePlaylist';

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      actualPage: 0,
      userNameToken: '',
      arrPlaylist: [],
      arrMusicsOfPlaylist: [],
      playlistName: '',
      playlistId: '',
    }
  }

  renderAllPlaylists = async () => {
    const requestHeader = {
      headers: {
          auth: this.state.userNameToken
      }
    }
    
    const requisicao = await axios.get(`${baseURL}/playlists/getAllPlaylists`, requestHeader)

    this.setState({ arrPlaylist: requisicao.data.result.list})
  }

  renderPlaylistMusics = async (id, name) => {
    const requestHeader = {
      headers: {
          auth: this.state.userNameToken
      }
    }
    
    const requisicao = await axios.get(`${baseURL}/playlists/getPlaylistMusics/${id}`, requestHeader)

    this.setState({
      arrMusicsOfPlaylist: requisicao.data.result.musics,
      playlistName: name,
      playlistId: id,
    })

  }

  onPageChange = (n, id, name) => {
    this.setState({ actualPage: n })
    if (n === 2 && this.state.userNameToken !== '') {
      this.renderAllPlaylists()
    } else if (n === 3 && this.state.userNameToken !== '') {
      this.renderPlaylistMusics(id, name)
    }
  }

  defineToken = (user) => {
    this.setState({ userNameToken: user })
  }

  render() {
    let pageToShow
    switch (this.state.actualPage) {
      case 1:
        pageToShow = (<NewPlaylistForm tokenAuth={this.state.userNameToken}/>)
        break;
      
      case 2:
        pageToShow =
          (<PlaylistsContainer
            token={this.state.userNameToken}
            playlist={this.state.arrPlaylist}
            onDeleteItem={this.renderAllPlaylists}
            seeMusicsOnPlaylist={this.onPageChange}
          />)
        break;
      
      case 3:
        pageToShow =
          (<SinglePlaylist
            listOfMusics={this.state.arrMusicsOfPlaylist}
            nameOfPlaylist={this.state.playlistName}
            idOfPlaylist={this.state.playlistId}
            showAllMusics={this.renderPlaylistMusics}
            token={this.state.userNameToken}
          />)
        break;

      default:
        break;
    }
    return(
      <div>
        <Header alterPage={this.onPageChange} tokenUserName={this.defineToken} />
        {pageToShow}
      </div>
    )
  }
}

export default App;
