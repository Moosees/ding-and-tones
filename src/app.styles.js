import styled from 'styled-components';

export const Viewport = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const SecondaryContent = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const MainContent = styled.div`
  align-items: stretch;
  display: flex;
  height: 100%;
  flex: 1 0 auto;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  flex: 1 0 auto;
`;
