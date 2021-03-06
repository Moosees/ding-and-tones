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
      This website uses cookies to handle your user session. By signing in you
      agree that this cookie can be saved on your device.
    </PrivacyParagraph>
    <PrivacyHeader>Collected data</PrivacyHeader>
    <PrivacyParagraph>
      Most of the website is usable without logging in or sharing any of your
      personal information. If you want to save songs or scales you can do so
      using your Google account.
    </PrivacyParagraph>
    <PrivacyHeader>Content visibility</PrivacyHeader>
    <PrivacyParagraph>
      Songs and scales saved will be visible to all other users of this website,
      and other users can use existing songs as starting points when building
      their own songs. This will not modify the original song. You have the
      option to remain anonymous or share your username next to your creations.
      Saved content can be removed without warning if it's outside of the vision
      of this website or warranted in some other way.
    </PrivacyParagraph>
    <PrivacyHeader>Consent</PrivacyHeader>
    <PrivacyParagraph>
      By using this website you consent to these terms.
    </PrivacyParagraph>
    <PrivacyParagraph>Last updated: 12 march 2021</PrivacyParagraph>
  </TermsContainer>
);

export default Privacy;
