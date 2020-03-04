import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Header from "../../components/Header";
import { routes } from "../Router";
import { createNewUser, userLogin } from "../../actions/login";

const MainContainer = styled.div`
`;

const LoginWrapper = styled.form`
  width: 100%;
  height: 70vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  toCreateUser = () => {
    const dataToSend = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.createNewUser(dataToSend)
    this.setState({
      email: "",
      password: ""
    })
  }

  onUserLogin = () => {
    const dataToSend = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.userLogin(dataToSend)
    this.setState({
      email: "",
      password: ""
    })
    this.props.goToTripsListPage()
  }

  render() {
    const { email, password } = this.state;

    return (
      <MainContainer>
        <Header />
        <LoginWrapper>
          <TextField
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="E-mail"
            value={email}
            required
          />
          <TextField
            onChange={this.handleFieldChange}
            name="password"
            type="password"
            label="Password"
            value={password}
            required
          />
          <Button onClick={this.onUserLogin}>Login</Button>
          <Button onClick={this.toCreateUser}>Registrar-se</Button>
        </LoginWrapper>
      </MainContainer>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToTripsListPage: () => dispatch(push(routes.tripsList)),
    createNewUser: (requestData) => dispatch(createNewUser(requestData)),
    userLogin: (requestData) => dispatch(userLogin(requestData))
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);
