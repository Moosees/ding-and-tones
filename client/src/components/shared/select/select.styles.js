import styled from 'styled-components';

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
  appearance: none;
  /* background-color: transparent; */
  /* border: 0; */
  cursor: inherit;
  /* display: inline-block; */
  /* height: 100%; */
  /* width: 100%; */
  /* z-index: 1; */
  /* position: relative; */
  /* right: 0; */
  /* left: 0; */

  &:focus {
    outline: 0;
  }
  /* 
  &:disabled {
    cursor: default;
    opacity: ${({ small }) => (small ? '0.9' : '1')};
  } */
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
