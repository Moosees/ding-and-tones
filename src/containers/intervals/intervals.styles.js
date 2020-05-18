import styled from 'styled-components';

export const IntervalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Interval = styled.span`
  background-color: rgba(0, 0, 0, 0.03);
  border: 5px solid ${({ color }) => color};
  border-radius: 5px;
  height: 2.5rem;
  margin-top: 4px;
  text-align: center;
`;
