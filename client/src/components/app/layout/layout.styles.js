import styled from 'styled-components';

export const Viewport = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  ${({ theme }) => theme.mqW700`
    height: calc(100vh + 5rem);
  `}

  @media screen and (max-width: 700px) and (orientation: portrait) {
    height: 100vw;
    left: 0;
    position: absolute;
    top: 100%;
    transform: rotate(-90deg);
    transform-origin: left top;
    width: 100vh;
  }
`;

export const LargeLayout = styled.div`
  align-items: center;
  display: grid;
  gap: 0 2rem;
  grid-template-areas:
    'drum main'
    'controls main';
  grid-template-columns: 35rem 1fr;
  grid-template-rows: minmax(35rem, 1fr) minmax(0, 1fr);
  height: 100%;
  max-height: 75rem;
  max-width: 160rem;
  padding: 4rem 4rem 2rem;
  position: relative;
  width: 100%;

  ${({ theme }) => theme.mqW1400`
    gap: 0 1rem;
    padding: 4rem 1rem 2rem;
  `}

  @media screen and (orientation: portrait) {
    gap: 2rem 0;
    grid-template-areas:
      'drum controls'
      'main main';
    grid-template-columns: minmax(35rem, 1fr) minmax(0, 1fr);
    grid-template-rows: 35rem minmax(0, 1fr);
    max-height: unset;
    max-width: unset;
    padding: 4rem 1rem 2rem;
  }
`;

export const MobileLayout = styled.div`
  height: 100%;
  max-height: 700px;
  padding: 1rem;
  width: 100%;
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
  font-size: 11px;
  height: 2rem;
  padding: 2px;

  ${({ theme }) => theme.mqW1200`
    position: static;
  `}
`;

export const PrivacyLink = styled.a`
  cursor: pointer;
  text-decoration: underline;
`;
