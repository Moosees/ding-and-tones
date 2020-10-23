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
      tonguedrum and handpan discussions. How to find and make drum tabs, what
      scale to chose, how to find chords and basic music theory. I hope to do
      this in a way that is applicable no matter what type of drum or scale you
      play.
    </PrivacyParagraph>
    <PrivacyHeader>Collected data</PrivacyHeader>
    <PrivacyParagraph>
      Most of the website is usable without sharing any of your personal data.
      But if you want to save your work, (and more importantly) collaborate with
      other people, an account is needed. To make this possible your email will
      be saved in our database, but not shared with other users or any third
      party.
    </PrivacyParagraph>
    <PrivacyHeader>Collaboration</PrivacyHeader>
    <PrivacyParagraph>
      Since the aim of this website is collaboration, songs and scales saved can
      be used by other users as inspiration or building blocks for their own
      creations. This will not modify the original creations, only the creator
      is allowed to do that. When saving a song or a scale, it will be public
      (though it can be anonymous if you chose). With this in mind, please don't
      upload other peoples content like, for example, exercises from courses.
      Also please keep offensive or disturbing content away and help keep this
      website a safe and including space.
    </PrivacyParagraph>
    <PrivacyHeader>Cookies</PrivacyHeader>
    <PrivacyParagraph>
      By signing in with your Google account third party cookies from Google are
      saved to your computer to help this website remember that you are signed
      in.
    </PrivacyParagraph>
    <PrivacyHeader>Consent</PrivacyHeader>
    <PrivacyParagraph>
      By using this website you consent to these terms.
    </PrivacyParagraph>
    <PrivacyParagraph>Last updated: 19th october 2020</PrivacyParagraph>
  </TermsContainer>
);

export default Privacy;