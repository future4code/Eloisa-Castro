import React from 'react';
import './App.css';
import Post from './components/Post/Post';

function App() {
  return (
    <div className="App">
      <Post imgUser="https://image.flaticon.com/icons/svg/145/145843.svg" nomeUser="José da Silva" 
        imgPost="https://img.estadao.com.br/resources/jpg/7/9/1567461089497.jpg" />
      <Post imgUser="https://image.flaticon.com/icons/svg/145/145844.svg" nomeUser="Maria Souza" 
        imgPost="https://pleno.news/wp-content/uploads/2019/09/plenonews_69429078_424547198412357_2917137491588994799_n-1024x684.jpg" />
      <Post imgUser="https://image.flaticon.com/icons/svg/145/145846.svg" nomeUser="Antonio Nunes" 
        imgPost="http://www.armadillofurioso.it/wp-content/uploads/2015/11/Alla-Ricerca-di-Dory-anticipazioni-sulla-trama-e-data-di-uscita-ufficiale.jpg" />
    </div>
  );
}

export default App;
