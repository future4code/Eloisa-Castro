import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import App from "./containers/App";
import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "./reducers";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    font-size: 16px;
  }
  body {
    background: #ECEDED;
  }
`;

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(generateReducers(history), compose(...middlewares))

render(
  <Provider store={store}>
    <GlobalStyle />
    <App history={history} />
  </Provider>,
  document.getElementById("root")
);