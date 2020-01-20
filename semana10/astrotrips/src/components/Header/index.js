import React from 'react';
import styled from 'styled-components';
import logo from '../../img/futureX_logo.jpg'
import { connect } from 'react-redux';
import { routes } from '../../containers/Router';
import { push } from 'connected-react-router'

const HeaderContainer = styled.div`
  background-color: #F7F052;
  height: 120px;
  width: 100vw;
  /* position: fixed;
  top: 0; */
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 100%;
`;

const HomeButton = styled.div`
  padding: 0 30px;
  color: #873217;
  font-weight: bold;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  cursor: pointer;
`;

const Header = (props) => {
  return (
    <HeaderContainer>
      <LogoImg src={logo} />
      <HomeButton onClick={props.goToHomePage}>Home</HomeButton>
    </HeaderContainer>
  )
}

function mapDispatchToProps(dispatch) {
  return{
    goToHomePage: () => dispatch(push(routes.root))
  }
}

export default connect(null, mapDispatchToProps)(Header);