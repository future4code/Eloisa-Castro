import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import App from "./containers/App";

import { createStore } from "redux";
import rootReducer from "./reducers";

const GlobalStyle = createGlobalStyle`
  body {
    background: black;
  }
`;

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
