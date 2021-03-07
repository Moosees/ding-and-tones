import styled from 'styled-components';

export const Bars = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 1rem 0;

  ${({ theme }) => theme.mqW850`
    padding: 3rem 0;
  `}
`;
