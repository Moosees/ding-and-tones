import styled from 'styled-components';

export const CheckboxLabel = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  opacity: ${({ checked, small }) => (checked || small ? '1' : '0.75')};
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
    transform: ${({ small }) => (small ? 'unset' : 'scale(1.15)')};

    ${({ theme }) => theme.mqW1200`
    transform: unset;
    }
  `}
`;

export const CheckboxInput = styled.span`
  background-color: ${({ theme }) => theme.colorBtnClear};
  border-radius: 100%;
  height: ${({ small }) => (small ? '1.8' : '2')}rem;
  left: ${({ reverse }) => (reverse ? 'unset' : '0')};
  right: ${({ reverse }) => (reverse ? '0' : 'unset')};
  position: absolute;
  transition: transform 0.2s ease;
  width: ${({ small }) => (small ? '1.8' : '2')}rem;

  &::after {
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colorCheckbox};
    border-radius: 100%;
    content: '';
    display: none;
    height: ${({ small }) => (small ? '1.8' : '2')}rem;
    position: absolute;
    left: 0;
    width: ${({ small }) => (small ? '1.8' : '2')}rem;
  }
`;
