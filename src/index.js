import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
// import './assets/sass/index.scss';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {persistor, store} from "./redux/store";
import 'normalize.css'
import './assets/fonts/fonts.css'
import 'react-toastify/dist/ReactToastify.css';
import { LocalizationProvider } from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns"; // Import the correct DateAdapter

// import 'styles/main.css';
import {PersistGate} from "redux-persist/integration/react";
import {ToastContainer, Zoom} from "react-toastify";
import {GlobalStyles} from "./utils/GlobalStyles";
import {ThemeProvider} from "styled-components";
import theme from './utils/theme';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <BrowserRouter>
                        <App/>
                        <GlobalStyles/>
                        <ToastContainer transition={Zoom} autoClose={3000} pauseOnHover={true} draggable={true}/>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </ThemeProvider>
        </LocalizationProvider>
    </React.StrictMode>
);
