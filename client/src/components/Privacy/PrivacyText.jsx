import React from 'react';
import { PrivacyHeader, PrivacyParagraph, TermsContainer } from './privacy.styles';

const PrivacyText = ({ privacyOpen, setPrivacyOpen }) => (
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
      Scales saved will be visible to all other users of this website. Songs are
      visible to all users unless you set them to private. Songs (non private)
      and scales by other users can be used by other users as starting points
      when building their own songs or scales. This will not modify the
      original. You have the option to remain anonymous or share your username
      next to your creations. Saved content can be removed without warning if
      it's outside of the vision of this website or warranted in some other way.
    </PrivacyParagraph>
    <PrivacyHeader>Consent</PrivacyHeader>
    <PrivacyParagraph>
      By using this website you consent to these terms.
    </PrivacyParagraph>
    <PrivacyParagraph>Last updated: 7 september 2021</PrivacyParagraph>
  </TermsContainer>
);

export default PrivacyText;
