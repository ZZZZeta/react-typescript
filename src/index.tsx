import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'style/App.css';
import Preloader from './components/Simple/Preloader';
import Router from "./routes";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Preloader>
                <Router />
            </Preloader>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
