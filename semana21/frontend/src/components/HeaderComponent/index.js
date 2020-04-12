import React from "react";
import styled from "styled-components";
import logo from "../../img/logo.jpg";
import MenuIcon from '@material-ui/icons/MenuRounded';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const HeaderContainer = styled.nav`
  width: 100%;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  background-color: #FFFFFF;
`;

const SecondaryContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledMenuIcon = styled(MenuIcon)`
  color: #000000;
`;

const Logo = styled.img`
  height: 35px;
  margin-left: 30px;
`;

export function HeaderComponent() {
  return (
    <HeaderContainer>
      <SecondaryContainer>
        <StyledMenuIcon />
        <Logo src={logo} />
      </SecondaryContainer>
      <Button
        variant="outlined"
        endIcon={<ExitToAppIcon />}
      >
        Logout
      </Button>
      
    </HeaderContainer>
  )
}