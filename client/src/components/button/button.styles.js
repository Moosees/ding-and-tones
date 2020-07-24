import styled from 'styled-components';

export const ButtonGroup = styled.div`
  align-items: center;
  display: flex;
  justify-content: ${({ position }) => (position ? position : 'flex-end')};
  width: 100%;
`;

export const ControlsButton = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  padding: 0.5rem;
  text-shadow: ${({ theme }) => theme.textShadowLight};
  transition: color 0.1s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colorBtnConfirm};
  }
`;

export const ControlsLabel = styled.span`
  padding-left: ${({ reverse }) => (reverse ? '5px' : '0px')};
  padding-right: ${({ reverse }) => (reverse ? '0px' : '5px')};
`;

export const GradientButton = styled.button`
  background-image: linear-gradient(
    to bottom,
    #ccc 0%,
    ${({ theme }) => theme.colorBox} 100%
  );
  border: ${({ theme }) => theme.borderMedium};
  border-radius: 2px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  padding: 3px;
  margin: 1px;
  min-width: 2rem;
  opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};
  transition: border 0.15s ease-in;

  &:hover {
    border: ${({ disabled, theme }) =>
      disabled ? theme.borderMedium : theme.borderLight};
  }
`;

export const NavButton = styled.button`
  background-color: ${({ theme }) => theme.colorBox};
  border: ${({ isActive, theme }) =>
    isActive ? theme.borderHeavyDark : theme.borderHeavyLight};
  border-bottom-color: ${({ isActive, theme }) =>
    isActive ? theme.colorBox : theme.colorNavBorder};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  font-size: ${({ controls, theme }) =>
    controls ? theme.fzMedium : theme.fzLarge};
  margin: -3px 2px 0;
  padding: ${({ controls }) => (controls ? '0.4rem' : '0.4rem 1rem')};
  position: relative;
  top: 3px;
  transition: transform 0.1s ease-in;
  ${({ isActive }) => (isActive ? 'z-index: 10;' : '')}

  &:focus:not(.focus-visible) {
    outline: 0;
  }

  &:hover {
    ${({ isActive }) => !isActive && 'transform: translateY(-2%) scale(1.04);'}
  }
`;

export const PrimaryButton = styled.button`
  border: ${({ theme }) => theme.borderLight};
  background-color: ${({ light, theme }) =>
    light ? theme.colorBtnLight : theme.colorBtnHeavy};
  border-radius: 3px;
  box-shadow: ${({ light, theme }) =>
    light ? theme.shadowBtnLight : theme.shadowBtnHeavy};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  margin: 0.5rem;
  min-width: 6rem;
  opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};
  padding: 0.5rem;
  transition: border 0.15s ease-in;

  &:hover {
    border: ${({ disabled, theme }) =>
      disabled ? theme.borderLight : theme.borderMedium};
  }
`;