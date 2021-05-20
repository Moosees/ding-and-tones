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
    background-color: transparent;
    border: 0;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }

  h1, h2, h3, h4 {
    font-weight: 500;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;

    --padding: 2rem;

    ${({ theme }) => theme.mqW1200`
      font-size: 56.25%;

      --padding: 1rem;
    `}

    ${({ theme }) => theme.mqW850`
      font-size: 50%;

      --padding: 0.5rem;
    `}

    ${({ theme }) => theme.mqW700`
      font-size: 43.75%;

      --padding: 1px;
    `}
  }

  body {
    background-color: ${({ theme }) => theme.colorBg};
    color: ${({ theme }) => theme.colorText};
    font-family: 'Roboto', sans-serif;
    font-size: ${({ theme }) => theme.fzSmaller};

    ${({ theme }) => theme.mqW1200`
      font-size: ${theme.fzSmall};
    `}

    ${({ theme }) => theme.mqW850`
      font-size: 12px;
    `}
  }

  @media print {
    @page {
      margin: 0;
      size: A4;

      & :footer, & :header {
        display: none;
      }
    }

    body {
      margin: 10mm 12mm;
    }
  }
`;
