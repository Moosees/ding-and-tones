import styled from 'styled-components';

export const Viewport = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export const LayoutGrid = styled.div`
  align-items: center;
  column-gap: 4rem;
  display: grid;
  grid-template-areas:
    'drum main'
    'controls main';
  grid-template-columns: 30rem 1fr;
  grid-template-rows: 50% 50%;
  height: 100%;
  max-height: 75rem;
  max-width: 160rem;
  padding: 4rem;
  width: 100%;
`;

export const SectionWithNav = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const BorderContainer = styled.div`
  background-color: ${({ theme }) => theme.colorBox};
  border: ${({ theme }) => theme.borderHeavyDark};
  border-radius: ${({ small }) => (small ? '50' : '100')}px;
  box-shadow: ${({ theme }) => theme.shadowHeavy};
  height: 100%;
  position: relative;
  width: 100%;
`;
