import styled from 'styled-components';

export const CheckboxLabel = styled.label`
  cursor: pointer;
  margin-bottom: 2px;
  padding: 0.5rem 0.5rem 0.5rem 3rem;
  position: relative;

  & input {
    height: 0;
    opacity: 0;
    position: absolute;
    width: 0;

    &:checked ~ span::after {
      display: block;
    }
  }

  &:hover input ~ span {
    background-color: ${({ theme }) => theme.colorBtnHeavy};
  }

  &:hover input:checked ~ span::after {
    background-color: ${({ theme }) => theme.colorBtnConfirm};
  }

  ${({ theme }) => theme.mqSmaller`
    margin-bottom: 1px;
  `}
`;

export const CheckboxInput = styled.span`
  background-color: ${({ theme }) => theme.colorBtnLight};
  border-radius: 100px;
  height: 2.5rem;
  left: 0;
  position: absolute;
  top: 3px;
  width: 2.5rem;

  &::after {
    background-color: ${({ theme }) => theme.colorCheckbox};
    border: ${({ theme }) => theme.borderLight};
    border-radius: 100px;
    content: '';
    display: none;
    height: 2.5rem;
    position: absolute;
    width: 2.5rem;
  }

  ${({ theme }) => theme.mqSmaller`
    height: 2rem;
    top: 2px;
    width: 2rem;

    &::after {
      height: 2rem;
      width: 2rem;
    }
  `}
`;
