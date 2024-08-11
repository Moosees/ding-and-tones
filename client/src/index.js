import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from './components/shared/loading/Loading';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');
const root = createRoot(container);

const App = lazy(() => import('./components/app/App'));
const GoogleResponse = lazy(() => import('./GoogleResponse'));

root.render(
  <Router>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/googleCB" element={<GoogleResponse />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </Suspense>
  </Router>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
