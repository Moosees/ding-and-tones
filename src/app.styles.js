import styled from 'styled-components';

export const Viewport = styled.div`
  background-color: #e6e6ed;
  display: flex;
  height: 100vh;
  padding: 6rem;
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
  margin-left: 6rem;
`;

export const MainContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 5px;
  flex: 1 0 auto;
`;
