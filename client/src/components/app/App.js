import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../assets/themes';
import { store } from '../../redux/store';
import GlobalStyles from './globalStyles';
import Layout from './Layout';

const App = ({ setDropdownForBeat, setPrivacyOpen }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyles />
        <Layout />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
