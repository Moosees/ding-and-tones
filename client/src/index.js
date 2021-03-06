import axios from 'axios';
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from './components/shared/loading/Loading';
import { API_ADDRESS } from './oauth';
import * as serviceWorker from './serviceWorker';

const App = lazy(() => import('./components/app/App'));
const GoogleResponse = lazy(() => import('./GoogleResponse'));

axios.defaults.baseURL = process.env.API_ADDRESS || API_ADDRESS;
axios.defaults.headers['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

ReactDOM.render(
  <Router>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/googleCB" children={<GoogleResponse />} />
        <Route path="/" children={<App />} />
      </Switch>
    </Suspense>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
