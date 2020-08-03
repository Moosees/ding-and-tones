import styled from 'styled-components';

export const Viewport = styled.div`
  align-items: center;
  column-gap: 4rem;
  display: grid;
  grid-template-columns: 22vw 1fr;
  height: 100vh;
  margin: 0 auto;
  padding: 0 4rem;
  width: 100vw;
`;

export const Column = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  max-height: 75rem;
  padding: 4rem 0;
  /* width: 100%; */
`;

export const Section = styled.div`
  display: flex;
  /* flex: 1 0; */
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const BorderContainer = styled.div`
  background-color: ${({ theme }) => theme.colorBox};
  border: ${({ theme }) => theme.borderHeavyDark};
  border-radius: ${({ small }) => (small ? '50' : '100')}px;
  box-shadow: ${({ theme }) => theme.shadowHeavy};
  /* flex: 1 0 10vh; */
  height: 100%;
  /* overflow: auto; */
  position: relative;
`;
