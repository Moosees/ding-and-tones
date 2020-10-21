import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { API_ADDRESS } from './oauth';
import { mainTheme } from './assets/themes';
import App from './components/app/App';
import GlobalStyles from './globalStyles';
import { store } from './redux/store';
import * as serviceWorker from './serviceWorker';

axios.defaults.baseURL = process.env.API_ADDRESS || API_ADDRESS;
axios.defaults.headers['Accept'] = 'application/json';
axios.defaults.headers.common['Authorization'] = 'Bearer undefined';

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
