import styled from 'styled-components';

export const GradientLayout = styled.div`
  align-items: center;
  background-image: linear-gradient(
    to bottom,
    #ccc 0%,
    ${({ theme }) => theme.colorBox} 100%
  );
  border: ${({ theme }) => theme.borderLight};
  border-radius: 4px;
  cursor: default;
  /* cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')}; */
  display: flex;
  padding: 1px 6px 1px 2px;
  position: relative;
  opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};
  transition: border 0.15s ease-in;

  /* &:hover {
    border: ${({ disabled, theme }) =>
    !disabled ? theme.borderMedium : theme.borderLight};
  } */
`;

export const InfoLayout = styled.div`
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
  margin: ${({ large }) => (large ? '1rem 0' : '0.5rem 0')};
  min-height: 3.5rem;
  padding-left: ${({ reverse }) => (reverse ? '0' : '0.5rem')};
  padding-right: ${({ reverse }) => (reverse ? '0.5rem' : '0')};
  position: relative;
  width: 100%;

  & > span {
    bottom: 3rem;
    left: 0;
    opacity: 0.6;
    position: absolute;
    transition: opacity 0.2s ease;

    ${({ theme }) => theme.mqW1200`
      bottom: 2.9rem;
      font-size: ${theme.fzSmaller};
      opacity: 0.8;
    `}
  }

  ${({ theme }) => theme.mqW850`
    max-height: 3.5rem;
  `}
`;
