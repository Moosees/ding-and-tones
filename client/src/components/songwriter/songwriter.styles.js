import styled from 'styled-components';

export const Bars = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 3rem 0 10rem;

  ${({ theme }) => theme.mqW850`
    padding: 4rem 0 30rem;
  `}
`;
