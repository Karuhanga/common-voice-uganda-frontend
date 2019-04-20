import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

require('../assets/styles/default.scss');

import App from './core/AppContainer';
import {Provider} from "react-redux";
import {render} from 'react-dom';
import React from "react";
import store from './store';
import mars from "../assets/images/mars.png";
import {BrowserRouter} from "react-router-dom";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Nunito'
        ].join(','),
    },
    palette: {
        primary: {
            main: '#b4e9e2',
        },
        secondary: {
            light: '#32dbc6',
            main: '#309286',
            contrastText: '#ebefd0',
        },
    }
});

render(
    <div>
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </MuiThemeProvider>
    </div>,
    document.getElementById('app')
);
