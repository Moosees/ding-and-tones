import styled from 'styled-components';

export const CheckboxLabel = styled.label`
  cursor: pointer;
  display: flex;
  opacity: ${({ checked }) => (checked ? '1' : '0.75')};
  padding: 0.2rem;
  padding-left: ${({ reverse }) => (reverse ? '0.2rem' : '2.2rem')};
  padding-right: ${({ reverse }) => (reverse ? '2.2rem' : '0.2rem')};
  position: relative;
  width: 100%;

  input {
    height: 0;
    opacity: 0;
    position: absolute;
    width: 0;

    &:checked ~ span::after {
      display: block;
    }
  }

  &:hover input ~ span {
    transform: scale(1.15);

    ${({ theme }) => theme.mqMedium`
    transform: unset;
    }
  `}
`;

export const CheckboxInput = styled.span`
  background-color: ${({ theme }) => theme.colorBtnClear};
  border-radius: 100px;
  height: 2rem;
  left: ${({ reverse }) => (reverse ? 'unset' : '0')};
  right: ${({ reverse }) => (reverse ? '0' : 'unset')};
  position: absolute;
  top: 0;
  transition: transform 0.2s ease;
  width: 2rem;

  &::after {
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colorCheckbox};
    border-radius: 100px;
    content: '';
    display: none;
    height: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 2rem;
  }

  /* ${({ theme }) => theme.mqSmaller`
    height: 1.8rem;
    top: 2px;
    width: 1.8rem;

    &::after {
      height: 1.8rem;
      width: 1.8rem;
    } */
  `}
`;
