import React from 'react';
import styled from 'styled-components';
import logo from '../../img/futureX_logo.jpg';
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';
import { routes } from '../Router';
import { push } from 'connected-react-router'

const MainContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
`;

const Description = styled.p`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 600;
`;

const ButtonsContainer = styled.div`
  margin-top: 30px;
  width: 750px;
  height: 75px;
  display: flex;
  justify-content: space-around;
`;

const StyledButton = styled(Button)`
  width: 300px;
`;

const HomePage = (props) => {
  return (
    <MainContainer>
      <Logo src={logo}/>
      <Description>Encontre as melhores viagens espaciais!</Description>
      <ButtonsContainer>
        <StyledButton onClick={props.goToApplication}>Inscrever-se para uma viagem</StyledButton>
        <StyledButton onClick={props.goToLogin}>Login</StyledButton>
      </ButtonsContainer>
    </MainContainer>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    goToLogin: () => dispatch(push(routes.login)),
    goToApplication: () => dispatch(push(routes.application))
  }
}

export default connect(null, mapDispatchToProps)(HomePage);