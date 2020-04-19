import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
//import { changePlanetAction } from "../../actions/planet";
import Router from "../Router";
import { history } from "../..";

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

const App = props => {
    return (
    <AppWrapper>
      <Router history={history} />
    </AppWrapper>
  );
};

const mapStateToProps = state => {
  return {
    // selectedLanguage: state.languages.selectedLanguage,
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
