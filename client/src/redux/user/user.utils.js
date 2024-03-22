export const getGoogleError = (error) => {
  switch (error) {
    case 'popup_closed_by_user':
      return `Sign in failed
      Popup was closed`;

    case 'popup_disabled':
      return `Sign in failed
      Popup blocked`;

    default:
      return `Sign in failed
      Please try again`;
  }
};
