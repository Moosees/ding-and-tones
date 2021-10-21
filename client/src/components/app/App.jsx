import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../../redux/store';
import AppEffects from './effects/AppEffects';
import Layout from './layout/Layout';
import DimensionsProvider from './providers/DimensionsProvider';
import HowlsProvider from './providers/HowlsProvider';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <DimensionsProvider>
        <HowlsProvider>
          <AppEffects />
          <Layout />
        </HowlsProvider>
      </DimensionsProvider>
    </ReduxProvider>
  );
};

export default App;
