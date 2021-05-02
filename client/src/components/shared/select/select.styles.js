import styled from 'styled-components';

export const SelectSmall = styled.div`
  align-items: center;
  border: ${({ theme }) => theme.borderMedium};
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  display: flex;
  font-size: ${({ theme }) => theme.fzSmallest};
  padding: 1px 6px 1px 2px;
  position: relative;
  opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};
  transition: color 0.1s ease-in;

  &:hover,
  &:focus {
    outline: 0;
    ${({ disabled, theme }) =>
      !disabled &&
      `
        border: ${theme.borderDark};
        color: ${theme.colorBtnConfirm};
      `}
  }
`;

export const SelectDropdown = styled.select`
  appearance: none;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: block;
  height: 100%;
  padding-left: ${({ hasLabel, labelWidth }) =>
    !hasLabel ? labelWidth + 3 : '0'}px;
  padding-right: 1rem;
  width: 100%;
  z-index: 1;

  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: default;
    opacity: ${({ small }) => (small ? '0.9' : '1')};
  }
`;

export const SelectLabel = styled.label`
  align-items: center;
  background-color: transparent;
  display: flex;
  height: ${({ small }) => (small ? 'unset' : '3.2rem')};
  min-height: ${({ hasLabel }) => (hasLabel ? '3rem' : 'unset')};
  width: 100%;

  span {
    bottom: ${({ hasLabel }) => (hasLabel ? '3rem' : 'unset')};
    left: ${({ hasLabel }) => (hasLabel ? '0' : 'unset')};
    opacity: ${({ hasLabel }) => (hasLabel ? '0.6' : '1')};
    position: absolute;
  }

  i {
    color: ${({ theme }) => theme.colorText};
    font-size: ${({ theme }) => theme.fzLarger};
    opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
    position: absolute;
    right: ${({ small }) => (small ? '0px' : '5px')};
  }
`;
