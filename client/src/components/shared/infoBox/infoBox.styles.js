import styled from 'styled-components';

export const InfoContainer = styled.div`
  align-items: center;
  border: ${({ theme }) => theme.borderLight};
  box-shadow: ${({ theme }) => theme.shadowBtnLight};
  background-color: ${({ theme }) => theme.colorBtnHeavy};
  border-radius: 3px;
  cursor: default;
  display: flex;
  flex: 1;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
  margin: 0.5rem;
  min-height: 3.5rem;
  padding: 0 0.5rem;
  position: relative;

  ${({ theme }) => theme.mqSmaller`
    max-height: 3.5rem;
  `}
`;

export const SelectLabel = styled.label`
  align-items: center;
  background-color: ${({ theme }) => theme.colorBtnHeavy};
  display: flex;
  height: 3rem;
  width: 100%;

  span {
    position: absolute;
  }

  i {
    color: ${({ theme }) => theme.colorText};
    font-size: ${({ theme }) => theme.fzLarge};
    position: absolute;
    right: 6px;
  }
`;

export const Select = styled.select`
  appearance: none;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: block;
  height: 100%;
  padding-left: ${({ labelWidth }) => labelWidth + 3}px;
  padding-right: 1rem;
  width: 100%;
  z-index: 1;

  &:focus:not(.focus-visible) {
    outline: none;
  }
`;

export const TextInput = styled.input`
  background-color: transparent;
  border: 0;
  height: 3rem;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::selection {
    background-color: ${({ theme }) => theme.colorTextInverted};
  }
`;

export const TextInputLabel = styled.label`
  align-items: center;
  display: flex;
  width: 100%;

  span {
    bottom: 3rem;
    left: 0;
    opacity: 0.6;
    position: absolute;
    transition: opacity 0.2s ease;
  }
`;
