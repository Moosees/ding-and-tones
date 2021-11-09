import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../../redux/store';
import AppEffects from './effects/AppEffects';
import Layout from './layout/Layout';
import DimensionsProvider from './providers/DimensionsProvider';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <DimensionsProvider>
        <AppEffects />
        <Layout />
      </DimensionsProvider>
    </ReduxProvider>
  );
};

export default App;
