import styled from 'styled-components';
import { InfoLayout } from '../layout/layout.styles';

export const SelectLabelSmall = styled.label`
  align-items: center;
  border: ${({ theme }) => theme.borderMedium};
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  display: flex;
  font-size: ${({ theme }) => theme.fzSmallest};
  position: relative;
  opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};
  transition: border-color 0.1s ease-in;

  select {
    padding: 1px 1.6rem 1px 1rem;
  }

  i {
    font-size: 2rem;
    position: absolute;
    right: 0;
  }

  &:hover,
  &:focus-within {
    outline: 0;
    ${({ disabled, theme }) =>
      !disabled &&
      `
        border-color: ${theme.colorBtnConfirm};

        i {
          color: ${theme.colorBtnConfirm};
        }
    `}
  }
`;

export const SelectDropdown = styled.select`
  align-self: stretch;
  appearance: none;
  cursor: inherit;
  width: 100%;
  z-index: 1;

  &:focus {
    outline: 0;
  }
`;

export const SelectLabel = styled(InfoLayout)`
  span {
    bottom: 3rem;
    left: 0;
    opacity: 0.6;
    position: absolute;
  }

  i {
    color: ${({ theme }) => theme.colorText};
    font-size: 2.4rem;
    opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
    position: absolute;
    right: 4px;

    ${({ theme }) => theme.mqW1000`
      right: 3px;
    `}
  }

  &:hover i,
  &:focus-within i {
    color: ${({ theme }) => theme.colorBtnConfirm};
  }
`;
