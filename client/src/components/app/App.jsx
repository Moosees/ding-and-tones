import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../assets/themes';
import { store } from '../../redux/store';
import DimensionsProvider from './DimensionsProvider';
import GlobalStyles from './globalStyles';
import Layout from './layout/Layout';

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
