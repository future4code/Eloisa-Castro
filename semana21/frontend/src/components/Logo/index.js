import React from "react";
import styled from "styled-components";
import logo from "../../img/logo.jpg";

const LogoContainer = styled.header`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  margin-top: 5px;
`;

const Logo = styled.img`
  height: 50px;
`;

export function LogoComponent() {
  return (
    <LogoContainer>
      <Logo src={logo} />
    </LogoContainer>
  )
}