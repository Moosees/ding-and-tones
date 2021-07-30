import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../assets/themes';
import { store } from '../../redux/store';
import GlobalStyles from './globalStyles';
import Layout from './layout/Layout';
import DimensionsProvider from './providers/DimensionsProvider';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <DimensionsProvider>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyles />
          <Layout />
        </ThemeProvider>
      </DimensionsProvider>
    </ReduxProvider>
  );
};

export default App;
