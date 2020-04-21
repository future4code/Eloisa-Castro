import React from "react";
import styled from "styled-components";
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

const App = (props) => {
    return (
    <AppWrapper>
      <Router history={props.history} />
    </AppWrapper>
  );
};

export default App;

// import React from "react";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";
// import {
//   MuiThemeProvider,
//   createGenerateClassName,
//   jssPreset,
//   CssBaseline
// } from "@material-ui/core";
// // import JssProvider from "react-jss/lib/JssProvider";
// import { create } from "jss";
// import { theme } from "../../theme/index";
// import Router from "../Router";
// import { createBrowserHistory } from "history";
// import { createStore, applyMiddleware, compose } from "redux";
// import { generateReducers } from "../../reducers";
// import { routerMiddleware } from "connected-react-router";
// import { createGlobalStyle } from "styled-components";



// export const history = createBrowserHistory();

// const middlewares = [
//   applyMiddleware(routerMiddleware(history), thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__
//     ? window.__REDUX_DEVTOOLS_EXTENSION__()
//     : f => f
// ];

// const store = createStore(generateReducers(history), compose(...middlewares));

// const GlobalStyle = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: 'Oswald', sans-serif;
//     font-weight: 300;
//     font-size: 16px;
//   }
//   body {
//     background: #ECEDED;
//   }
// `;


// export const App = () => (
//   <Provider store={store}>
//     {/* <JssProvider jss={jss} generateClassName={generateClassName}> */}
//     <GlobalStyle />

//       <MuiThemeProvider theme={theme}>
//         <CssBaseline />
//         <Router history={history} />
//       </MuiThemeProvider>
//     {/* </JssProvider> */}
//   </Provider>
// );

// export default App;

