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

export const openGooglePopup = (url) => {
  const height = Math.min(window.screen.height, 500);
  const top = window.screen.height / 2 - height / 2;
  const width = Math.min(window.screen.width, 440);
  const left = window.screen.width / 2 - width / 2;
  const win = window.open(
    url,
    'GoogleSignIn',
    `location=no,menubar=no,status=no,status=no,toolbar=no,height=${height},width=${width},top=${top},left=${left}`
  );

  if (win) win.opener = window;
};

export const handleGooglePostMsg = () =>
  new Promise((resolve, reject) => {
    const getMessageFromPopup = (event) => {
      if (!event.data.search) reject('Could not sign in');

      resolve(event.data.search);
      console.log('remove listener');
      window.removeEventListener('message', getMessageFromPopup);
    };
    console.log('add listener');
    window.addEventListener('message', getMessageFromPopup);
  });

export const getGoogleCode = (msg) => {
  const state = (msg.match(/state=([^&]+)/) || [])[1];
  const code = (msg.match(/code=([^&]+)/) || [])[1];
  return state === 'google' ? code : '';
};
