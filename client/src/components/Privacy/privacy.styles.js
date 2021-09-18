import styled from 'styled-components';

export const Copyright = styled.footer`
  bottom: 0;
  font-size: 11px;
  padding: 2px;
  position: absolute;
`;

export const PrivacyLink = styled.a`
  cursor: pointer;
  text-decoration: underline;
`;

export const MobileCopyright = styled.div`
  bottom: 0;
  padding: 1px;
  position: fixed;
  right: 5%;
  opacity: 0.4;
`;

export const TermsContainer = styled.div`
  max-height: 75vh;
  max-width: 75vw;
  overflow: auto;
  padding: 2rem;
  width: 60rem;
`;

export const PrivacyHeader = styled.h4`
  font-size: 1.8rem;
  margin: 1rem 0;
`;

export const PrivacyParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
`;
