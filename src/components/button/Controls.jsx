import React from 'react';
import styled from 'styled-components';

const BtnContainer = styled.div`
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

const Label = styled.span`
  padding-left: ${({ reverse }) => (reverse ? '5px' : '0px')};
  padding-right: ${({ reverse }) => (reverse ? '0px' : '5px')};
`;

const BtnControls = ({ label, icon, reverse, onClick }) => {
  return (
    <BtnContainer reverse={reverse} onClick={onClick}>
      <Label reverse={reverse}>{label}</Label>
      <i className="material-icons">{icon}</i>
    </BtnContainer>
  );
};

export default BtnControls;
