import styled from 'styled-components';

export const IntervalList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
`;

export const IntervalContainer = styled.div`
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
`;
