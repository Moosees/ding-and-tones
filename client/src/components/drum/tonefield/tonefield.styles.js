import styled from 'styled-components';

export const ExtraContainer = styled.div`
  align-items: center;
  background-color: #333;
  border-color: ${({ color }) => color};
  border-radius: 100%;
  border-style: solid;
  border-width: ${({ hasFocus }) => (hasFocus ? '5px' : '3px')};
  box-shadow: ${({ theme }) => theme.shadowLight};
  color: #ccc;
  cursor: ${({ showNote }) => (showNote ? 'pointer' : 'default')};
  display: flex;
  font-size: 2rem;
  height: 5rem;
  justify-content: center;
  position: absolute;
  width: 5rem;

  ${({ theme }) => theme.mqW1200`
    border-width: ${({ hasFocus }) => (hasFocus ? '4px' : '2px')};
    font-size: 1.8rem;
    height: 4rem;
    width: 4rem;
  `}

  ${({ theme }) => theme.mqW850`
    border-width: ${({ hasFocus }) => (hasFocus ? '2px' : '1px')};
    font-size: 1.5rem;
    height: 3rem;
    width: 3rem;
  `}
`;
