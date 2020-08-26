import React from 'react';
import { connect } from 'react-redux';
import Loading from '../shared/loading/Loading';

const SignInBoundary = ({ children, signInTried }) => {
  return <>{signInTried ? children : <Loading />}</>;
};

const mapStateToProps = ({ user }) => ({
  signInTried: user.signInTried,
});

export default connect(mapStateToProps)(SignInBoundary);
