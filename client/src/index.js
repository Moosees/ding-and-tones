import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { GlobalStyles } from './index.styles';
import { store } from './redux/store';
import * as serviceWorker from './serviceWorker';
import { mainTheme } from './themes';
import axios from 'axios';
import { API_ADDRESS } from './oauth';

axios.defaults.baseURL = API_ADDRESS;
axios.defaults.headers['Accept'] = 'application/json';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
