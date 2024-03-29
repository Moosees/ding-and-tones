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
    min-height: 100vh;
    min-height: -webkit-fill-available;

    --padding: 2rem;
    --drum-size: 35rem;
    --font-text: 'Roboto', sans-serif;
    --font-notes: 'Sura', serif;
    --font-beats: 'Stint Ultra Condensed', sans-serif;
    --weight-beats: 400;

    ${({ theme }) => theme.mqW1200`
      font-size: 56.25%;

      --padding: 1rem;
      --drum-size: 28rem;
    `}

    ${({ theme }) => theme.mqW850`
      font-size: 50%;

      --padding: 0.5rem;
      --drum-size: 22rem;
    `}

    ${({ theme }) => theme.mqW700`
      font-size: 43.75%;

      --padding: 1px;
    `}
    
    @media screen and (orientation: portrait) and (max-width: 1000px) {
      --padding: 0;
    }

    @media print {
      & :footer, & :header {
        display: none;
      }
    }
  }

  body {
    background-color: ${({ theme }) => theme.colorBg};
    color: ${({ theme }) => theme.colorText};
    font-family: var(--font-text);
    font-size: ${({ theme }) => theme.fzSmaller};

    ${({ theme }) => theme.mqW1200`
      font-size: ${theme.fzSmall};
    `}

    ${({ theme }) => theme.mqW850`
      font-size: 12px;
    `}
  }
`;
