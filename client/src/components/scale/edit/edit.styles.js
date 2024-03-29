import styled from 'styled-components';

export const EditContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const EditContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 32rem;
  width: 36rem;

  ${({ theme }) => theme.mqW850`
    min-height: 27rem;
  `}

  @media screen and (orientation: portrait) and (max-width: 1000px) {
    min-height: revert;
    width: auto;
  }
`;

export const TextLabel = styled.p`
  opacity: 0.7;
`;
