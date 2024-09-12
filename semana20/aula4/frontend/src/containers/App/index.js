import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

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
      <h4>Olá! Bora fazer uploads 😉</h4>
      <form
        action="https://wfdo9ou1yl.execute-api.us-east-1.amazonaws.com/v4/uploadFile"
        method="POST"
        enctype="multipart/form-data"
      >
        <input name="arquivo" type="file" />
        <button type="submit">Enviar</button>
      </form>
    </AppWrapper>
  );
};

export default connect()(App);
