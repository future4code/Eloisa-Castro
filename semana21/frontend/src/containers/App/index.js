import React from "react";
import styled from "styled-components";
import Router from "../Router";

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

const App = (props) => {
    return (
    <AppWrapper>
      <Router history={props.history} />
    </AppWrapper>
  );
};

export default App;