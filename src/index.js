require('../assets/styles/default.scss');

import App from './core/AppContainer';
import {Provider} from "react-redux";
import {render} from 'react-dom';
import React from "react";
import store from './store';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
