export const getGoogleError = ({ error }) => {
  switch (error) {
    case 'idpiframe_initialization_failed':
      return `Sign in failed!
      Third party cookies must be enabled to sign in with google`;

    case 'popup_closed_by_user':
      return `Sign in failed!
      Popup was closed before you could be signed in`;

    case 'access_denied':
      return `Sign in failed!
      Permission to access your profile was denied`;

    default:
      return `Sign in failed!`;
  }
};
