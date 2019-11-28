import React from 'react'
import './Post.css'
import curtirBranco from '../../images/favorite-white.svg'
import curtirPreto from '../../images/favorite.svg'
import commentIcon from '../../images/comment_icon.svg'


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
                <div className="container-comentario">
                    <input type="text" placeholder="Escreva seu comentário"/>
                    <button onClick={this.aoComentar}>Comentar</button>
                </div>
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
            <div className="post-container">
                <div className="user-container">
                    <img src={this.props.imgUser} />
                    <p> {this.props.nomeUser} </p>
                </div>
                <img src={this.props.imgPost} />
                <div className="container-interativo">
                    <div>
                        <img onClick={this.aoCurtir} src={this.state.imagemCurtir} />
                        <p>{this.state.curtidas}</p>
                    </div>
                    <div>
                        <img onClick={this.aoClicarNoIconeComentario} src={commentIcon} />
                        <p>{this.state.comentarios}</p>
                    </div>
                </div>
                {this.aparecerInput(this.state.mostraInput)}
            </div>
        )
    }
}

export default Post