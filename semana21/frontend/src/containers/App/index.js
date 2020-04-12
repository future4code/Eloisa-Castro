import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
//import { changePlanetAction } from "../../actions/planet";
import logo from "../../img/logo.jpg";
import { SignupPage } from "../SignupPage";
import { LoginPage } from "../LoginPage";
import { ChangePasswordPage } from "../ChangePasswordPage";
import { HeaderComponent } from "../../components/HeaderComponent";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  padding: 0px;
  color: white;
  overflow: hidden;
  height: 100vh;
`;

const Logo = styled.img`
  width: 400px;
`;

const App = props => {
    return (
    <AppWrapper>
      <HeaderComponent />
      {/* <Logo src={logo} /> */}
      {/* <SignupPage/> */}
      <LoginPage />
      {/* <ChangePasswordPage /> */}
    </AppWrapper>
  );
};

const mapStateToProps = state => {
  return {
    selectedLanguage: state.languages.selectedLanguage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //changePlanet: planet => dispatch(changePlanetAction(planet))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
