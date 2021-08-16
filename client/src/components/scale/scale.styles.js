import styled from 'styled-components';

export const ScaleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  padding: var(--padding);

  @media (orientation: portrait) {
    flex-direction: column;
    padding: 0 0.5rem;
  }
`;

export const Section = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  @media (orientation: portrait) {
    min-height: 0;
    width: 100%;

    &:first-child {
      min-height: auto;
      border-bottom: ${({ theme }) => theme.borderMedium};
      flex: 0;
    }
  }
`;
