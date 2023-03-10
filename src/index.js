import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
// import './assets/sass/index.scss';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import 'normalize.css'
import './assets/fonts/fonts.css'
// import 'styles/main.css';
import { PersistGate } from "redux-persist/integration/react";

import {GlobalStyles} from "./utils/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from './utils/theme';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
            <GlobalStyles/>
          <App />
        </Router>
      </PersistGate>
    </Provider>
     </ThemeProvider>
  </React.StrictMode>
);
