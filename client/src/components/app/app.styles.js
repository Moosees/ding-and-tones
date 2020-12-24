import styled from 'styled-components';

export const Viewport = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  ${({ theme }) => theme.mqW850`
    height: calc(100vh + 5rem);
  `}

  @media screen and (max-width: 800px) and (orientation: portrait) {
    height: 100vw;
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
  position: relative;
  width: 100%;

  ${({ theme }) => theme.mqW1300`
    column-gap: 1rem;
    grid-template-columns: 32rem 1fr;
    grid-template-rows: minmax(32rem, 50%) 50%;
    max-width: unset;
    padding: 4rem 1rem 1rem;
  `}

  ${({ theme }) => theme.mqW1000`
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

  ${({ small, theme }) => theme.mqW1200`
    border-radius: ${small ? '50' : '70'}px;
  `}

  ${({ theme }) => theme.mqW1000`
    border-radius: 45px;
    max-height: 99vh;
  `}
`;

export const Copyright = styled.footer`
  bottom: 0;
  font-size: 1.2rem;
  height: 2rem;
  padding: 2px;
  position: absolute;

  ${({ theme }) => theme.mqW1000`
  position: static;
`}
`;

export const PrivacyLink = styled.a`
  cursor: pointer;
  text-decoration: underline;
`;
