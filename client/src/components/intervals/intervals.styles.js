import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IntervalHeader = styled.h4`
  margin: 3px 0;
  text-transform: uppercase;
`;

export const IntervalList = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  padding: 0.5rem;

  ${({ theme }) => theme.mqW850`
    padding: 1rem 0.5rem;
  `}
`;

export const IntervalContainer = styled.div`
  align-items: center;
  border-bottom: ${({ theme }) => theme.borderLight};
  display: flex;

  &:last-child {
    border-bottom: 0;
  }
`;

export const Interval = styled.div`
  background-color: ${({ color }) => color};
  border-radius: 100px;
  display: inline-block;
  height: 2.2rem;
  margin: 0.25rem;
  width: 2.2rem;

  ${({ theme }) => theme.mqW850`
    height: 1.6rem;
    width: 1.6rem;
  `}
`;
