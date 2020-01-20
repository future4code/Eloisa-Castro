import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Header from "../../components/Header";
import { applyToTrip } from '../../actions/trips';
import { routes } from "../Router";
import MenuItem from '@material-ui/core/MenuItem';
import { getAllTrips } from '../../actions/trips'
import { countriesOptions } from "./countries";

const MainContainer = styled.div`
`;

const LoginWrapper = styled.form`
  width: 100%;
  gap: 10px;
  place-content: center;
  display: grid;
  grid-template-columns: 400px;
`;

const PageTitle = styled.h2`
  color: #E65804;
  margin-top: 40px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  text-align: center;
`;

class ApplicationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viagem: "",
      nome: "",
      idade: "",
      porque: "",
      profissao: "",
      pais: "",
    };
  }

  componentDidMount() {
    this.props.showAllTrips()
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault()
    const formData = {
      name: this.state.nome,
      age: this.state.idade,
      applicationText: this.state.porque,
      profession: this.state.profissao,
      country: this.state.pais,
    }
    this.props.apply(this.state.viagem, formData)
    this.setState({
      viagem: "",
      nome: "",
      idade: "",
      porque: "",
      profissao: "",
      pais: "",
    })
  }

  render() {
    const { nome, idade, porque, profissao, pais } = this.state;

    return (
      <MainContainer>
        <Header />
        <PageTitle>Formulário de Inscrição</PageTitle>
        <LoginWrapper onSubmit={this.onFormSubmit}>
          <TextField
            name="viagem"
            type="text"
            label="Viagem"
            onChange={this.handleFieldChange}
            value={this.state.viagem}
            select
            required
          >
            {this.props.tripsList.map( trip => (
                <MenuItem key={trip.id} value={trip.id}>
                  {trip.name + ' - ' + trip.planet}
                </MenuItem>
              ))}
          </TextField>
          <TextField
            onChange={this.handleFieldChange}
            name="nome"
            type="text"
            label="Nome"
            value={nome}
            required
            inputProps={{pattern: '[A-Za-z.- ]{3,}'}}
            title="Insira um nome com pelo menos 3 caracteres."
          />
          <TextField
            onChange={this.handleFieldChange}
            name="idade"
            type="number"
            label="Idade"
            value={idade}
            required
            min="18"
            title="A idade deve ser maior de 18 anos."
          />
          <TextField
            onChange={this.handleFieldChange}
            name="porque"
            type="text"
            label="Por que você quer ir?"
            value={porque}
            multiline
            required
            inputProps={{pattern: '[A-za-z.- ]{30,}'}}
            title="A justificativa deve ter pelo menos 30 caracteres."
          />
          <TextField
            onChange={this.handleFieldChange}
            name="profissao"
            type="text"
            label="Profissão"
            value={profissao}
            required
            inputProps={{pattern: '[A-za-z.- ]{10,}'}}
            title="A profissão deve ter pelo menos 10 caracteres."
          />
          <TextField
            onChange={this.handleFieldChange}
            name="pais"
            type="text"
            label="País"
            value={pais}
            required
            select
          >
            {countriesOptions.map( option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button type="submit">SUBMETER</Button>
        </LoginWrapper>
      </MainContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    tripsList: state.trips.tripsArray
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showAllTrips: () => dispatch(getAllTrips()),
    apply: (tripId, requestInfos) => dispatch(applyToTrip(tripId, requestInfos)),
    goToTripsListPage: () => dispatch(push(routes.application)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm);