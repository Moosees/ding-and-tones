import styled from 'styled-components';

const extraPositions = [
  'right: 5rem; top: 1rem;',
  'left: 5rem; top: 1rem;',
  'right: 0; top: 7rem;',
  'left: 0; top: 7rem;',
  'bottom: 7rem; right: 0;',
  'bottom: 7rem; left: 0;',
  'bottom: 1rem; right: 5rem;',
  'bottom: 1rem; left: 5rem;',
];

const miniExtraPositions = [
  'right: 20px; top: 0;',
  'left: 20px; top: 0;',
  'right: -12px; top: 40px;',
  'left: -12px; top: 40px;',
  'bottom: 40px; right: -12px;',
  'bottom: 40px; left: -12px;',
  'bottom: 0; right: 20px;',
  'bottom: 0; left: 20px;',
];

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
  font-family: 'Sura', serif;
  font-size: 2rem;
  height: 5rem;
  justify-content: center;
  position: absolute;
  width: 5rem;

  ${({ position }) => extraPositions[position]}

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

export const MiniExtraContainer = styled.div`
  align-items: center;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 100%;
  color: #000;
  cursor: default;
  display: flex;
  font-family: 'Sura', serif;
  font-size: 14px;
  height: 30px;
  justify-content: center;
  position: absolute;
  width: 30px;

  ${({ position }) => miniExtraPositions[position]}
`;
