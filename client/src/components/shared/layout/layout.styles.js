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
