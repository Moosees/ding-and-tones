import styled from 'styled-components';

export const Viewport = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  position: fixed;
  width: 100%;
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
    max-height: revert;
    max-width: revert;
  }
`;

export const MobileLayout = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden auto;
  padding: var(--padding);
  position: relative;
  width: 100%;
`;

export const SectionWithNav = styled.div`
  display: flex;
  position: relative;
`;

export const BorderContainer = styled.div`
  background-color: ${({ theme }) => theme.colorBox};
  border: ${({ theme }) => theme.borderHeavyDark};
  border-radius: ${({ $small }) => ($small ? '58' : '65')}px;
  box-shadow: ${({ theme }) => theme.shadowHeavy};
  display: flex;
  flex-grow: 1;
  justify-content: center;
  margin-top: ${({ $small }) => ($small ? '-3rem' : 'revert')};
  max-height: ${({ $small }) => ($small ? '40rem' : 'revert')};
  overflow: hidden;
  position: relative;
`;
