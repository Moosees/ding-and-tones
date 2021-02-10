import styled from 'styled-components';

export const Viewport = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  ${({ theme }) => theme.mqW1200`
    padding: 5px 2px 2px;
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
  display: grid;
  flex-grow: 1;
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
  }
`;

export const MobileLayout = styled.div`
  border: ${({ theme }) => theme.borderLight};
  border-radius: 30px;
  box-shadow: ${({ theme }) => theme.shadowBtnLight};
  display: flex;
  flex-grow: 1;
  height: 100%;
  max-height: 700px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  position: relative;
`;

export const SectionWithNav = styled.div`
  display: flex;
  position: relative;
`;

export const BorderContainer = styled.div`
  background-color: ${({ theme }) => theme.colorBox};
  border: ${({ theme }) => theme.borderHeavyDark};
  border-radius: ${({ small }) => (small ? '65' : '100')}px;
  box-shadow: ${({ theme }) => theme.shadowHeavy};
  display: flex;
  flex-grow: 1;
  justify-content: center;
  max-height: ${({ small }) => (small ? '40rem' : 'unset')};
  overflow: hidden;
  position: relative;
`;

export const Copyright = styled.footer`
  bottom: 0;
  font-size: 11px;
  padding: 2px;
  position: absolute;
`;

export const PrivacyLink = styled.a`
  cursor: pointer;
  text-decoration: underline;
`;

export const MobileCopyright = styled.div`
  bottom: 0;
  padding: 1px;
  position: absolute;
  right: 5%;
  opacity: 0.4;
`;
