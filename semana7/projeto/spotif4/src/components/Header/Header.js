import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FF822E;
    padding: 15px;
    width: 100vw;
`

const WelcomeContainer = styled.div`
    text-align: center;
`

const MenuContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 15px;
`

const HeaderButton = styled.button`
    padding: 5px 20px;
    border-radius: 8px;
    background-color: white;
    border: 2px solid #E82700;
`

const UserInput = styled.input`
    padding: 5px;
    border-radius: 8px;
    border: 1px solid darkgray;
    margin-right: 5px;
`

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            userName: '',
            showLogin: true,
        }
    }

    onChangeUserName = (e) => {
        const newUserName = e.target.value
        this.setState({ userName: newUserName })
    }

    onClickNewPlaylist = () =>{
        this.props.alterPage(1)
    }

    onClickSeePlaylists = async () => {
        this.props.alterPage(2)
    }

    loginUser = () => {
        if (this.state.userName !== '') {
            this.setState({ showLogin: false })
            this.props.tokenUserName(this.state.userName)
        }
    }

    render() {
        return (
            <HeaderContainer>
                <WelcomeContainer>
                    <h1>Bem-vind@ ao Spotif4!</h1>
                    <h5>... Coloque seu usuário para iniciar ...</h5>
                </WelcomeContainer>
                <MenuContainer>
                    <div>
                        <UserInput
                            placeholder="Insira seu usuário"
                            value={this.state.userName}
                            onChange={this.onChangeUserName}
                        />
                        {this.state.showLogin && (<HeaderButton onClick={this.loginUser}>Login</HeaderButton>)}
                    </div>
                    <HeaderButton onClick={this.onClickNewPlaylist}>Criar nova playlist</HeaderButton>
                    <HeaderButton onClick={this.onClickSeePlaylists}>Ver todas as playlists</HeaderButton>
                </MenuContainer>

            </HeaderContainer>
        )
    }
}

export default Header;