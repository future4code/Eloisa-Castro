import React from 'react';
import './App.css';
import Post from './components/Post/Post';

function App() {
  return (
    <div className="App">
      <Post imgUser="https://image.flaticon.com/icons/svg/145/145843.svg" nomeUser="Eloisa" 
        imgPost="https://img.estadao.com.br/resources/jpg/7/9/1567461089497.jpg" />
    </div>
  );
}

export default App;
