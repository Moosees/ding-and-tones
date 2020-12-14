import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../redux/user/user.actions';
import Loading from '../shared/loading/Loading';

const SignInBoundary = ({ children, signIn, singOut }) => {
  const [loaded, setLoaded] = useState(true);

  return <>{loaded ? children : <Loading />}</>;
};

export default connect(null, { signIn, signOut })(SignInBoundary);
