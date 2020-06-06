import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    background-color: #e6e6ed;
    color: rgb(0, 0, 0, 0.8);
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    line-height: 1.6;
  }
`;

export const Viewport = styled.div`
  align-items: center;
  column-gap: 6rem;
  display: grid;
  grid-template-columns: 22vw 1fr;
  height: 100vh;
  margin: 0 auto;
  max-width: 140rem;
  padding: 6rem;
  width: 100vw;
`;

export const Column = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  flex-direction: column;
  max-height: 75rem;
`;

export const Section = styled.div`
  display: flex;
  flex: 1 0;
  flex-direction: column;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'unset')};
  width: 100%;
`;

export const BorderContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  border: 3px solid #000;
  border-radius: 5px;
  box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.25);
  flex: 1 0 10vh;
  overflow: auto;
  position: relative;
`;
