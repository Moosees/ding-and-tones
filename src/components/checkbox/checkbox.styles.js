import styled from 'styled-components';

export const CheckboxLabel = styled.label`
  margin-bottom: 2px;
  padding: 0.5rem 0.5rem 0.5rem 3rem;
  position: relative;

  & input {
    cursor: pointer;
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
    background-color: ${({ theme }) => theme.colorBtnHeavy};
    border-color: ${({ theme }) => theme.colorBtnClear};
  }
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
`;
