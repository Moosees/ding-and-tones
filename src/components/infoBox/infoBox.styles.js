import styled from 'styled-components';

export const InfoContainer = styled.div`
  align-items: center;
  border: ${({ theme }) => theme.borderLight};
  box-shadow: ${({ theme }) => theme.shadowBtnLight};
  background-color: ${({ theme }) => theme.colorBtnHeavy};
  border-radius: 3px;
  cursor: default;
  display: flex;
  flex: 0 0;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
  margin: 0.5rem;
  min-height: 3.5rem;
  padding: 0 0.5rem;
`;

export const EditIcon = styled.i`
  color: ${({ theme }) => theme.colorText};
  cursor: pointer;
`;

export const SaveIcon = styled.i`
  color: ${({ isEditing, theme }) =>
    isEditing ? theme.colorBtnClear : theme.colorBtnConfirm};
  cursor: ${({ isEditing }) => (isEditing ? 'not-allowed' : 'pointer')};
`;

export const Select = styled.select`
  background-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colorBtnHeavy} 0%,
    ${({ theme }) => theme.colorBtnHeavy} 100%
  );
  border: 0;
  cursor: pointer;
  margin-right: 0.5rem;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const SelectContainer = styled.label`
  display: flex;
  width: 100%;
`;

export const TextInput = styled.input`
  background-color: ${({ theme }) => theme.colorBtnHeavy};
  border: 0;
  height: 3rem;
  width: 100%;

  &:focus {
    outline: none;
  }
`;
