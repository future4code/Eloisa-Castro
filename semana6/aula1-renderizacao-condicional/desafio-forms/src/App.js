import React from 'react';
import './App.css';
import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TituloForm = styled.h2`
    margin: 15px 0;
`

const LabelForm = styled.label`
    margin-bottom: 5px;
`

const InputForm = styled.input`
    width: 400px;
    margin-bottom: 10px;
`

const SelectForm = styled.select`
    width: 400px;
    margin-bottom: 10px;
`

const BotaoProx = styled.button`
  padding: 3px 15px;
  margin-top: 15px;
  border-radius: 5px;
  border: 1px solid darkgray;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagina: 1,
      nomeBotao: 'Próxima Etapa',
      inputNome: '',
      inputIdade: '',
      inputEmail: '',
      selectEscolaridade: 'medio-incompleto',
      inputCurso: '',
      inputUnidadeEnsino: '',
      inputMotivo: '',
      selectCursoComplementar: 'curso-tecnico'
    };

    this.aoInserirInformacao = this.aoInserirInformacao.bind(this)
  }

  aoInserirInformacao = (e) => {
    const alvo = e.target
    const valor = alvo.value
    const nome = alvo.name 
    this.setState({
      [nome]: valor
    })
  }

  aoClicarProxima = () => {
    let paginaCopy = 0
    if (this.state.pagina === 1) {
      if (this.state.inputNome === '' || this.state.inputIdade === '' || this.state.inputEmail === '') {
        alert("Você deve preencher todas as perguntas da ETAPA 1 antes de continuar.")
        paginaCopy = this.state.pagina
      } else {
        if (this.state.selectEscolaridade === "medio-completo" || 
          this.state.selectEscolaridade === "medio-incompleto") {
            paginaCopy = this.state.pagina + 2
        } else {
          paginaCopy = this.state.pagina + 1
        }
        this.setState({nomeBotao: "Finalizar"})
      }
    } else if (this.state.pagina === 2) {
      if (this.state.inputCurso === '' || this.state.inputUnidadeEnsino === '') {
        alert("Você deve preencher todas as perguntas da ETAPA 2 antes de continuar.")
        paginaCopy = this.state.pagina
      } else {
        paginaCopy = this.state.pagina + 2
      }
    } else {
      if (this.state.inputMotivo === '') {
        alert("Você deve preencher todas as perguntas da ETAPA 3 antes de continuar.")
        paginaCopy = this.state.pagina
      } else {
        paginaCopy = this.state.pagina + 1
      }
    }
    this.setState({pagina: paginaCopy})
  }

  render() {
    let tela
    switch (this.state.pagina) {
      case 1:
        tela = (
        <MainContainer>
            <TituloForm>ETAPA 1 - Dados Gerais</TituloForm>
            <LabelForm>1. Nome:</LabelForm>
            <InputForm name={"inputNome"} value={this.state.inputNome} onChange={this.aoInserirInformacao} />
            <LabelForm>2. Idade:</LabelForm>
            <InputForm name={"inputIdade"} value={this.state.inputIdade} onChange={this.aoInserirInformacao} />
            <LabelForm>3. Email:</LabelForm>
            <InputForm name={"inputEmail"} value={this.state.inputEmail} onChange={this.aoInserirInformacao} />
            <LabelForm>4. Qual o seu grau de escolaridade?</LabelForm>
            <SelectForm name={"selectEscolaridade"} value={this.state.selectEscolaridade} onChange={this.aoInserirInformacao}>
                <option value="medio-incompleto">Ensino Médio Incompleto</option>
                <option value="medio-completo">Ensino Médio Completo</option>
                <option value="superior-incompleto">Ensino Superior Incompleto</option>
                <option value="superior-completo">Ensino Superior Completo</option>
            </SelectForm>
        </MainContainer>
        )
        break;
      case 2:
        tela = (
        <MainContainer>
            <TituloForm>ETAPA 2 - Informações do Ensino Superior</TituloForm>
            <LabelForm>1. Qual o curso?</LabelForm>
            <InputForm name={"inputCurso"} value={this.state.inputCurso} onChange={this.aoInserirInformacao} />
            <LabelForm>2. Qual a unidade de ensino?</LabelForm>
            <InputForm name={"inputUnidadeEnsino"} value={this.state.inputUnidadeEnsino} onChange={this.aoInserirInformacao} />
        </MainContainer>
        )
        break;
      case 3:
        tela = (
        <MainContainer>
            <TituloForm>ETAPA 3 - Informações Gerais de Ensino</TituloForm>
            <LabelForm>1. Por que você não terminou um curso de graduação?</LabelForm>
            <InputForm name={"inputMotivo"} value={this.state.inputMotivo} onChange={this.aoInserirInformacao} />
            <LabelForm>2. Você fez algum curso complementar?</LabelForm>
            <SelectForm name={"selectCursoComplementar"} value={this.state.selectCursoComplementar} onChange={this.aoInserirInformacao}>
                <option value="curso-tecnico">Curso Técnico</option>
                <option value="curso-ingles">Curso de inglês</option>
                <option value="nenhum-curso">Não fiz nenhum curso complementar</option>
            </SelectForm>
        </MainContainer>
        )
        break;
      case 4:
        tela = (
        <MainContainer>
            <TituloForm>FORMULÁRIO FINALIZADO</TituloForm>
            <p>Muito obrigado por responder nosso formulário! Em breve entraremos em contato.</p>
        </MainContainer>
        )
        break;
      default:
        break;
    }
    return (
    <div className="App">
      {tela}
      {this.state.pagina < 4 && <BotaoProx onClick={this.aoClicarProxima}>{this.state.nomeBotao}</BotaoProx>}
    </div>
  );
    }
}

export default App;