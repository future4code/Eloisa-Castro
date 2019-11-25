import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h2>FutureTube</h2>
        <div className="container-de-busca">
          <input type="search" placeholder="Busca"/>
          <div className="imagem-de-busca">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJ2GUPXuz-mKjk-Kf13p1bncsES5h_EYcSUDegFOzq0qAVVUWV"/>
          </div>
        </div>
        <div className="container-login">
          <img src="https://ftp.mastertech.com.br/Esta%C3%A7%C3%A3o%20Hack/Turma%204/Dia%202/Luan%20Gustavo%20Nikolly%20Lucas%20Camila/login.png"/>
          <p>FAZER LOGIN</p>
        </div>
        
      </header>

      <div className="main-container">
        <nav>
          <p>Início</p>
          <p>Em alta</p>
          <p>Inscrições</p>
          <p>Originais</p>
          <p>Biblioteca</p>
          <p>Histórico</p>
        </nav>

        <section>
          <article>
            <img src={require('./img/img1.jpg')} alt="img1"/>
            <div className="dados-media">
              <img src="https://image.flaticon.com/icons/svg/145/145846.svg"/>
              <div>
                <p className="nome-media">Media 1</p>
                <p className="autor-media">Autor 1</p>
                <p className="visualizacoes">1,5 mil visuzalizações - há 1 semana</p>
              </div>
            </div>
          </article>
          
          <article>
            <img src={require('./img/img2.jpg')} alt="img2"/>
            <div className="dados-media">
              <img src="https://image.flaticon.com/icons/svg/145/145845.svg"/>
              <div>
                <p className="nome-media">Media 2</p>
                <p className="autor-media">Autor 2</p>
                <p className="visualizacoes">1,5 mil visuzalizações - há 1 semana</p>
              </div>
            </div>
          </article>
          
          <article>
            <img src={require('./img/img3.jpg')} alt="img3"/>
            <div className="dados-media">
              <img src="https://image.flaticon.com/icons/svg/145/145844.svg"/>
              <div>
                <p className="nome-media">Media 3</p>
                <p className="autor-media">Autor 3</p>
                <p className="visualizacoes">1,5 mil visuzalizações - há 1 semana</p>
              </div>
            </div>
          </article>
          
          <article>
            <img src={require('./img/img4.jpg')} alt="img4"/>
            <div className="dados-media">
              <img src="https://image.flaticon.com/icons/svg/145/145847.svg"/>
              <div>
                <p className="nome-media">Media 4</p>
                <p className="autor-media">Autor 4</p>
                <p className="visualizacoes">1,5 mil visuzalizações - há 1 semana</p>
              </div>
            </div>
          </article>
          
          <article>
            <img src={require('./img/img5.jpg')} alt="img5"/>
            <div className="dados-media">
              <img src="https://image.flaticon.com/icons/svg/145/145847.svg"/>
              <div>
                <p className="nome-media">Media 5</p>
                <p className="autor-media">Autor 4</p>
                <p className="visualizacoes">1,5 mil visuzalizações - há 1 semana</p>
              </div>
            </div>
          </article>

          <article>
            <img src={require('./img/img6.jpg')} alt="img6"/>
            <div className="dados-media">
              <img src="https://image.flaticon.com/icons/svg/145/145842.svg"/>
              <div>
                <p className="nome-media">Media 6</p>
                <p className="autor-media">Autor 5</p>
                <p className="visualizacoes">1,5 mil visuzalizações - há 1 semana</p>
              </div>
            </div>
          </article>
          
          <article>
            <img src={require('./img/img7.jpg')} alt="img7"/>
            <div className="dados-media">
              <img src="https://image.flaticon.com/icons/svg/145/145846.svg"/>
              <div>
                <p className="nome-media">Media 7</p>
                <p className="autor-media">Autor 1</p>
                <p className="visualizacoes">1,5 mil visuzalizações - há 1 semana</p>
              </div>
            </div>
          </article>
          
          <article>
            <img src={require('./img/img8.jpg')} alt="img8"/>
            <div className="dados-media">
              <img src="https://image.flaticon.com/icons/svg/145/145846.svg"/>
              <div>
                <p className="nome-media">Media 8</p>
                <p className="autor-media">Autor 1</p>
                <p className="visualizacoes">1,5 mil visuzalizações - há 1 semana</p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default App;
