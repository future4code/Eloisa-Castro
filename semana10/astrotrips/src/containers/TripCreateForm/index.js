import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from '@material-ui/core/MenuItem';
import { createNewTrip } from '../../actions/trips';
import { connect } from 'react-redux';

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

const planetsList = [
  'Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno'
]

const planetsOptions = planetsList.map(planet => (
  <MenuItem key={planet} value={planet}> {planet} </MenuItem>
))

class TripCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      planet: '',
      date: '',
      description: '',
      duration: '',
    }
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitNewTrip = (e) => {
    e.preventDefault()
    const tripInformation = {
      name: this.state.name,
      planet: this.state.planet,
      date: this.state.date,
      description: this.state.description,
      durationInDays: this.state.duration,
    }
    this.props.createTrip(tripInformation)
    this.setState({
      name: '',
      planet: '',
      date: '',
      description: '',
      duration: '',
    })
  }

  render() {
    const inputArray = [
      {
        name: 'name',
        type: 'text',
        label: 'Nome da viagem',
        required: true,
        value: this.state.name,
        multiline: false,
        pattern: '[A-Za-z.-_!%@]{5,}',
      },
      {
        name: 'planet',
        type: 'text',
        label: 'Planeta',
        required: true,
        value: this.state.planet,
        multiline: false,
        select: true,
      },
      {
        name: 'date',
        type: 'date',
        label: 'Data da viagem',
        required: true,
        value: this.state.date,
        min: new Date(),
      },
      {
        name: 'description',
        type: 'text',
        label: 'Descrição',
        required: true,
        value: this.state.description,
        multiline: true,
        pattern: '[A-Za-z.-_!%@]{30,}',
      },
      {
        name: 'duration',
        type: 'number',
        label: 'Duração da viagem (dias)',
        required: true,
        value: this.state.duration,
        minValue: 50,
      },
    ]

    return (
      <div>
        <Header />
        <PageTitle>Formulário de Cadastro</PageTitle>
          <LoginWrapper onSubmit={this.submitNewTrip}>
            {inputArray.map(item => {
              return (
                <TextField
                  key={item.name}
                  name={item.name}
                  type={item.type}
                  label={item.label}
                  required={item.required}
                  multiline={item.multiline}
                  value={item.value}
                  onChange={this.handleFieldChange}
                  select={item.select}
                  inputProps={{pattern: item.pattern}}
                  min={item.minValue}
                >
                {item.select && planetsOptions }
                </TextField>
              )
                }
              )
            }
            <Button type="submit">CADASTRAR</Button>
          </LoginWrapper>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createTrip: (tripInfos) => dispatch(createNewTrip(tripInfos))
  }
}

export default connect(null, mapDispatchToProps)(TripCreateForm);