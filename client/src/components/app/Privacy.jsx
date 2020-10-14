import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setPrivacyOpen } from '../../redux/ui/ui.actions';
import BtnPrimary from '../shared/button/Primary';
import Popup from '../shared/popup/Popup';

const TermsContainer = styled.div`
  height: 75vh;
  max-width: 75vw;
  overflow: scroll;
  padding: 2rem;
  width: 80rem;
`;

const PrivacyHeader = styled.h4`
  font-size: 1.6rem;
`;

const Privacy = ({ privacyOpen, setPrivacyOpen }) => (
  <>
    {privacyOpen && (
      <Popup header={'Privacy policy'} onClose={() => setPrivacyOpen(false)}>
        <TermsContainer>
          <PrivacyHeader>Collected data</PrivacyHeader>
          <PrivacyHeader>
            Public domain, no stealing course material etc
          </PrivacyHeader>
          <PrivacyHeader>Protecting data</PrivacyHeader>
          <PrivacyHeader>No sharing data</PrivacyHeader>
          <PrivacyHeader>Request to retrieve or remove data</PrivacyHeader>
          <PrivacyHeader>No offensive material</PrivacyHeader>
          <PrivacyHeader>Cookies</PrivacyHeader>
          <PrivacyHeader>Who am I</PrivacyHeader>
          <BtnPrimary
            light
            label="Close"
            onClick={() => setPrivacyOpen(false)}
          />
        </TermsContainer>
      </Popup>
    )}
  </>
);

const mapStateToProps = ({ ui }) => ({
  privacyOpen: ui.privacyOpen,
});

export default connect(mapStateToProps, { setPrivacyOpen })(Privacy);
