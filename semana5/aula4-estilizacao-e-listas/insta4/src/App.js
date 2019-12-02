import React from 'react';
import Post from './components/Post/index'
import './App.css';
import styled from 'styled-components'

const PostForm = styled.div`
  margin: 10px;
  border: 1px solid black;
  padding: 5px;
  width: 45vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PostFormItem = styled.div`
  display: flex;
  margin-bottom: 5px;
  width: 100%;
`

const LabelFormPost = styled.label`
  margin-right: 10px;
  width: 40%;
`

const InputFormPost = styled.input`
  width: 55%
`

const ButtonFormPost = styled.button`
  padding: 3px 30px;
  border-radius: 5px;
  border: 1px solid darkgrey;
  margin-top: 10px;
`

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      postArray : [],
      nomeInput: "",
      imgUserInput: "",
      imgPostInput: "",
    };
  }

  changeNomeInput = (event) => {
    this.setState({
      nomeInput: event.target.value
    })
  }

  changeImgUserInput = (event) => {
    this.setState({
      imgUserInput: event.target.value
    })
  }

  changeImgPostInput = (event) => {
    this.setState({
      imgPostInput: event.target.value
    })
  }
  
  clickPostar = () => {
    const novoPost = {
      nameUser: this.state.nomeInput,
      imageUser: this.state.imgUserInput,
      imagePost: this.state.imgPostInput
    }
    const postArrayCopy = [...this.state.postArray, novoPost]
    this.setState({
      postArray: postArrayCopy,
      nomeInput: "",
      imgUserInput: "",
      imgPostInput: "",
    })

  }

  render() {
    return (
      <div className="App">
        <PostForm>
          <PostFormItem>
            <LabelFormPost>Nome do usuário: </LabelFormPost>
            <InputFormPost type="text" value={this.state.nomeInput} onChange={this.changeNomeInput}></InputFormPost>
          </PostFormItem>
          <PostFormItem>
            <LabelFormPost>URL da foto do usuário: </LabelFormPost>
            <InputFormPost type="text" value={this.state.imgUserInput} onChange={this.changeImgUserInput}></InputFormPost>
          </PostFormItem>
          <PostFormItem>
            <LabelFormPost>URL da foto do post: </LabelFormPost>
            <InputFormPost type="text" value={this.state.imgPostInput} onChange={this.changeImgPostInput}></InputFormPost>
          </PostFormItem>
          <ButtonFormPost onClick={this.clickPostar}>Postar</ButtonFormPost>
        </PostForm>

        {this.state.postArray.map(el => {
          return (
            <Post imgUser={el.imageUser} nomeUser={el.nameUser} imgPost={el.imagePost} />
          )
        })}
      </div>
    );
  }
}

export default App;