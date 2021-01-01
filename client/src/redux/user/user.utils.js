export const getGoogleError = ({ error }) => {
  switch (error) {
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

const openGooglePopup = (url) => {
  const height = Math.min(window.screen.height, 500);
  const top = window.screen.height / 2 - height / 2;
  const width = Math.min(window.screen.width, 440);
  const left = window.screen.width / 2 - width / 2;
  const win = window.open(
    url,
    'GoogleSignIn',
    `location=no,menubar=no,status=no,status=no,toolbar=no,height=${height},width=${width},top=${top},left=${left}`
  );

  if (win) {
    win.opener = window;
    return win;
  }
};

export const handleGooglePostMsg = (url) => {
  const win = openGooglePopup(url);

  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (win.closed) {
        window.removeEventListener('message', getMessageFromPopup);
        clearInterval(interval);
        reject('popup_closed_by_user');
      }
    }, 500);

    const getMessageFromPopup = (event) => {
      const allowedOrigins =
        process.env.NODE_ENV === 'production'
          ? ['https://www.dingandtones.com', 'https://dingandtones.com']
          : [window.origin];

      if (
        !win ||
        !allowedOrigins.includes(event.origin) ||
        !event.data.search
      ) {
        window.removeEventListener('message', getMessageFromPopup);
        clearInterval(interval);
        reject('access_denied');
      } else {
        window.removeEventListener('message', getMessageFromPopup);
        clearInterval(interval);
        resolve(event.data.search);
      }
    };

    window.addEventListener('message', getMessageFromPopup);
  });
};

export const getGoogleCode = (msg) => {
  const state = (msg.match(/state=([^&]+)/) || [])[1];
  const code = (msg.match(/code=([^&]+)/) || [])[1];
  return state === 'google' ? code : '';
};
