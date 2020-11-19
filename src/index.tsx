import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Preloader from './components/Simple/Preloader';
import Router from './routes';
import './styles/index.css';

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
