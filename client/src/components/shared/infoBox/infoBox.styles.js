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

export const Select = styled.select`
  background-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colorBtnHeavy} 0%,
    ${({ theme }) => theme.colorBtnHeavy} 100%
  );
  border: 0;
  cursor: pointer;
  margin-right: 2px;
  width: 100%;

  &:focus:not(.focus-visible) {
    outline: none;
  }
`;

export const SelectContainer = styled.label`
  display: flex;
  width: 100%;
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
