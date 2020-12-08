import styled from 'styled-components';

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
