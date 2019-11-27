import React from 'react';
import './App.css';
import PageSection from './components/PageSection/PageSection';
import BigCard from './components/BigCard/BigCard';
import SmallCard from './components/SmallCard/SmallCard';
import ImageButton from './components/ImageButton/ImageButton';

function App() {
  return (
    <div className="App">
      <PageSection titulo="Dados Pessoais">
        <BigCard imagem="https://image.flaticon.com/icons/svg/145/145844.svg" nome="Eloísa Castro" 
          descricao="Sou Biomédica, apaixonada por Biologia Molecular.
            Embora tenha formação na área da saúde, também sou apaixonada
            por bichinhos (mas só os fofinhos)! Atualmente, embarquei na
            missão de me tornar desenvolvedora."/>
        <SmallCard imagem="https://icon-library.net/images/mail-icon-vector/mail-icon-vector-11.jpg" item="Email: " informacao="abc@gmail.com" />
        <SmallCard imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUr0CB5hbLoumCajStiAqj4aqoI2CDKmm0eJY2-9cTUuBy6qnx" item="Endereço: " informacao="Rua XV de Novembro, 150" />
        <ImageButton imagem="https://myrealdomain.com/images/seta-para-baixo-teclado-1.png" texto="Ver mais"/>
      </PageSection>

      <PageSection titulo="Experiências Profissionais">
        <BigCard imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRweIjuKSV2kOOE0zGvIAk3injwHkxG4ijS9CpUQcgMgz5i4hBT" 
          nome="DB Molecular" descricao="Realização de testes de paternidade humana." />
        <BigCard imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9lJj3yG7EFmOiXD4OUEwjh7uXP2h3DJEd07zPqX7oCdjO7gr3" 
          nome="Allele Biotecnologia" descricao="Realização de testes de paternidade animal (equinos, bovinos, caninos)" />
      </PageSection>

      <PageSection titulo="Minhas redes sociais">
        <ImageButton imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" texto="Facebook" />        
        <ImageButton imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" texto="Twitter" />        
      </PageSection>
    </div>
  );
}

export default App;
