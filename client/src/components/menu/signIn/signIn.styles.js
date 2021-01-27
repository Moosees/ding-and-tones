import styled from 'styled-components';

export const SignInContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-height: 80vh;
  max-width: 60rem;
  padding: 2rem;
`;

export const TermsLink = styled.a`
  text-decoration: underline;
  padding-bottom: 1rem;
`;

export const GoogleBtn = styled.button`
  background: #fff;
  border: thin solid #888;
  border-radius: 5px;
  box-shadow: 1px 1px 1px grey;
  cursor: pointer;
  display: inline-block;
  height: 40px;
  padding-left: 8px;
  padding-right: 8px;
  white-space: nowrap;

  svg {
    display: inline-block;
    height: 18px;
    vertical-align: middle;
    width: 18px;
  }
  span {
    color: rgba(0, 0, 0, 0.54);
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    padding-left: 24px;
    text-transform: uppercase;
    vertical-align: middle;
  }
`;
