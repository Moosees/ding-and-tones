import styled from 'styled-components';

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

  &:focus:not(.focus-visible) {
    outline: none;
  }
`;

export const SelectLabel = styled.label`
  align-items: center;
  background-color: transparent;
  display: flex;
  height: ${({ gradient }) => (gradient ? 'unset' : '3.2rem')};
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
    font-size: ${({ theme }) => theme.fzLarge};
    position: absolute;
    right: ${({ gradient }) => (gradient ? '0px' : '5px')};
  }
`;
