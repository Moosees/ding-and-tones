import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  button, label, input, select {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;

    ${({ theme }) => theme.mqMedium`
      font-size: 56.25%;
  `}
  }

  body {
    background-color: ${({ theme }) => theme.colorBg};
    color: ${({ theme }) => theme.colorText};
    font-family: 'Roboto', sans-serif;
    font-size: ${({ theme }) => theme.fzMedium};
  }
`;
