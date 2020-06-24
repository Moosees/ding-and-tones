import styled from 'styled-components';

export const Viewport = styled.div`
  align-items: center;
  column-gap: 4rem;
  display: grid;
  grid-template-columns: 22vw 1fr;
  height: 100vh;
  margin: 0 auto;
  max-width: 160rem;
  padding: 4rem;
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
  background-color: ${({ theme }) => theme.colorBox};
  border: ${({ theme }) => theme.borderHeavyDark};
  border-radius: ${({ small }) => (small ? '50' : '100')}px;
  box-shadow: ${({ theme }) => theme.shadowHeavy};
  flex: 1 0 10vh;
  overflow: auto;
  position: relative;
`;
