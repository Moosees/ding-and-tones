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
  margin: 0.5rem 0;
  min-height: 3.5rem;
  padding-left: ${({ reverse }) => (reverse ? '0' : '0.5rem')};
  padding-right: ${({ reverse }) => (reverse ? '0.5rem' : '0')};
  position: relative;
  width: 100%;

  ${({ theme }) => theme.mqSmaller`
    max-height: 3.5rem;
  `}
`;

export const TextInput = styled.input`
  background-color: transparent;
  border: 0;
  height: 3.2rem;
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
