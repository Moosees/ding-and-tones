import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleResponse = () => {
  const location = useLocation();

  useEffect(() => {
    if (!window.opener) return;
    window.opener.postMessage(location, window.location.origin);
    window.close();
  }, [location]);

  return <div>Signing in...</div>;
};

export default GoogleResponse;
