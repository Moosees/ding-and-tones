import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../assets/themes';
import { store } from '../../redux/store';
import DimensionsProvider from './DimensionsProvider';
import GlobalStyles from './globalStyles';
import Layout from './Layout';

const App = ({ setDropdownForBeat, setPrivacyOpen }) => {
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
