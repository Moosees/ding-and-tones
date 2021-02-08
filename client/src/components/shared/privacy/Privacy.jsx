import React from 'react';
import styled from 'styled-components';

const TermsContainer = styled.div`
  max-height: 75vh;
  max-width: 75vw;
  overflow: auto;
  padding: 2rem;
  width: 60rem;
`;

const PrivacyHeader = styled.h4`
  font-size: 1.8rem;
  margin: 1rem 0;
`;

const PrivacyParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

const Privacy = ({ privacyOpen, setPrivacyOpen }) => (
  <TermsContainer>
    <PrivacyHeader>Ding and Tones vision</PrivacyHeader>
    <PrivacyParagraph>
      With this website I hope to provide solutions to common issues I see in
      tonguedrum and handpan discussions online. How to find, make and print
      drum tabs, what scale to chose, how to find chords on your drum and help
      with basic music theory. I hope to do this in a way that is applicable no
      matter what type of drum or scale you play. Enjoy!
    </PrivacyParagraph>
    <PrivacyHeader>Cookies</PrivacyHeader>
    <PrivacyParagraph>
      This website does not currently use any cookies.
    </PrivacyParagraph>
    <PrivacyHeader>Collected data</PrivacyHeader>
    <PrivacyParagraph>
      Most of the website is usable without sharing any of your personal data.
      But if you want to save your songs or scales an account is needed. To make
      this possible your email will be saved in our database, but not shared
      with other users or any third party.
    </PrivacyParagraph>
    <PrivacyHeader>Content visibility</PrivacyHeader>
    <PrivacyParagraph>
      Songs and scales saved will be visible to all other users of this website,
      and other users can use existing songs as starting points when building
      their own songs. This will not modify the original song. You have the
      option to remain anonymous or share your username next to your creations.
      Created content on this website can be removed if it contains offensive
      language or is copied from another author without their permission.
    </PrivacyParagraph>
    <PrivacyHeader>Consent</PrivacyHeader>
    <PrivacyParagraph>
      By using this website you consent to these terms.
    </PrivacyParagraph>
    <PrivacyParagraph>Last updated: 8 february 2021</PrivacyParagraph>
  </TermsContainer>
);

export default Privacy;
