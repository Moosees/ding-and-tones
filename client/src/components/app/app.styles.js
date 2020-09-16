import styled from 'styled-components';

export const Viewport = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  ${({ theme }) => theme.mqSmaller`
    height: 70rem;
  `}

  @media screen and (max-width: 800px) and (orientation: portrait) {
    height: 70rem;
    left: 0;
    position: absolute;
    top: 100%;
    transform: rotate(-90deg);
    transform-origin: left top;
    width: 100vh;
  }
`;

export const LayoutGrid = styled.div`
  align-items: center;
  column-gap: 2rem;
  display: grid;
  grid-template-areas:
    'drum main'
    'controls main';
  grid-template-columns: 35rem 1fr;
  grid-template-rows: minmax(35rem, 50%) 50%;
  height: 100%;
  max-height: 75rem;
  max-width: 160rem;
  padding: 4rem 4rem 1rem;
  width: 100%;

  ${({ theme }) => theme.mqLarge`
    column-gap: 1rem;
    grid-template-columns: 32rem 1fr;
    grid-template-rows: minmax(32rem, 50%) 50%;
    max-width: unset;
    padding: 4rem 1rem 1rem;
  `}

  ${({ theme }) => theme.mqSmall`
    display: block;
    padding: 3rem 0.5rem 0.5rem;
  `}
`;

export const SectionWithNav = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  width: 100%;
`;

export const BorderContainer = styled.div`
  background-color: ${({ theme }) => theme.colorBox};
  border: ${({ theme }) => theme.borderHeavyDark};
  border-radius: ${({ small }) => (small ? '65' : '100')}px;
  box-shadow: ${({ theme }) => theme.shadowHeavy};
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;

  ${({ theme }) => theme.mqSmall`
    border-radius: 60px;
  `}
`;
