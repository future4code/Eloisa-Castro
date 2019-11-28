import React from 'react'
import styled from 'styled-components'
import curtirBranco from '../../images/favorite-white.svg'
import curtirPreto from '../../images/favorite.svg'
import commentIcon from '../../images/comment_icon.svg'

const PostContainer = styled.div`
    width: 40vw;
    border: 1px solid black;
    margin: 10px;
`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
`

const UserImage = styled.img`
    width: 50px;
    margin-right: 10px;
`

const UserName = styled.p``

const PostImage = styled.img`
    width: 100%;
`

const InteractiveContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`

const ActionContainer = styled.div`
    display: flex;
`

const ActionImage = styled.img`
    margin-right: 10px;
`

const CommentContainer = styled.div`
    text-align: center;
    margin: 10px 0;
`

const CommentInput = styled.input`
    margin-right: 5px;
    padding: 1px;
`

const CommentButton = styled.button`
    padding: 1px 5px;
`

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            curtidas: 0,
            comentarios: 0,
            imagemCurtir: curtirBranco,
            mostraInput: false,
        }
    }

    aoCurtir = () => {
        if (this.state.imagemCurtir === curtirBranco) {
            this.setState({
                imagemCurtir: curtirPreto,
                curtidas: 1
            })
        } else {
            this.setState({
                imagemCurtir: curtirBranco,
                curtidas: 0,
            })
        }
    }

    aoClicarNoIconeComentario = () => {
        this.setState({
            mostraInput: true,
        })
    }
    
    aparecerInput = (mostra) => {
        if (mostra) {
            return (
                <CommentContainer>
                    <CommentInput type="text" placeholder="Escreva seu comentário"/>
                    <CommentButton onClick={this.aoComentar}>Comentar</CommentButton>
                </CommentContainer>
            )
        }
    }

    aoComentar = () => {
        const numeroDeComentarios = this.state.comentarios
        this.setState({
            comentarios: numeroDeComentarios + 1,
            mostraInput: false,
        })
    }

    render() {
        return(
            <PostContainer>
                <UserContainer>
                    <UserImage src={this.props.imgUser} />
                    <UserName> {this.props.nomeUser} </UserName>
                </UserContainer>
                <PostImage src={this.props.imgPost} />
                <InteractiveContainer>
                    <ActionContainer>
                        <ActionImage onClick={this.aoCurtir} src={this.state.imagemCurtir} />
                        <p>{this.state.curtidas}</p>
                    </ActionContainer>
                    <ActionContainer>
                        <ActionImage onClick={this.aoClicarNoIconeComentario} src={commentIcon} />
                        <p>{this.state.comentarios}</p>
                    </ActionContainer>
                </InteractiveContainer>
                {this.aparecerInput(this.state.mostraInput)}
            </PostContainer>
        )
    }
}

export default Post