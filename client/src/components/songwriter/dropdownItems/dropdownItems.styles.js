import styled from 'styled-components';

export const DropdownItem = styled.div`
  align-items: center;
  background-color: ${({ hasNonScaleNote, selected, theme }) =>
    selected
      ? hasNonScaleNote
        ? theme.colorBtnClear
        : theme.colorBeat
      : 'transparent'};
  border-radius: 2px;
  color: ${({ selected, theme }) =>
    selected ? theme.colorTextInverted : theme.colorText};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  display: flex;
  font-size: ${({ theme }) => theme.fzSmallest};
  justify-content: space-between;
  margin: 1px;
  min-width: 7rem;
  opacity: ${({ disabled, selected }) => (disabled && !selected ? '0.6' : '1')};
  padding: 2px;
  position: relative;
  transition: background-color 0.2s ease, opacity 0.2s ease;
  z-index: 300;

  &:hover,
  &:focus {
    outline: 0;
    ${({ disabled, theme }) =>
      !disabled && `background-color: ${theme.colorBtnHeavy};`};
  }

  ${({ theme }) => theme.mqW1200`
    font-size: ${theme.fzSmaller};
  `}

  ${({ theme }) => theme.mqW1000`
    font-size: ${theme.fzMedium};
  `}

  ${({ theme }) => theme.mqW850`
    padding: 1px;
  `}
`;

export const HandIcon = styled.i`
  font-size: inherit;
`;

