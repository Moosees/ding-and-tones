import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './assets/themes';
import App from './components/app/App';
import GoogleResponse from './components/app/GoogleResponse';
import GlobalStyles from './globalStyles';
import { API_ADDRESS } from './oauth';
import { store } from './redux/store';
import * as serviceWorker from './serviceWorker';

axios.defaults.baseURL = process.env.API_ADDRESS || API_ADDRESS;
axios.defaults.headers['Accept'] = 'application/json';
axios.defaults.headers.common['Authorization'] = 'Bearer undefined';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/googleCB" children={<GoogleResponse />} />
      <Route path="/">
        <Provider store={store}>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyles />
            <App />
          </ThemeProvider>
        </Provider>
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
