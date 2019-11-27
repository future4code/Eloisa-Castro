import React from 'react'
import './Post.css'

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            curtidas: 0,
            comentarios: 0,
        }
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
                    <button>
                        <img src={require('../../images/favorite-white.svg')} />
                    </button>
                    <p>{this.state.curtidas}</p>
                    <img src={require('../../images/comment_icon.svg')} />
                    <p>{this.state.comentarios}</p>
                    {/* {this.aparecerInput()} */}
                </div>

            </div>
        )
    }
}

export default Post