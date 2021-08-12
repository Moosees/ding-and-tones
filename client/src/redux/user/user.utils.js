export const getGoogleError = (error) => {
  switch (error) {
    case 'popup_closed_by_user':
      return `Sign in failed
      Popup was closed`;

    case 'access_denied':
      return `Sign in failed
      Could not access profile, please try again`;

    case 'popup_disabled':
      return `Sign in failed
      Popups blocked`;

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
    return win;
  }
};

export const handleGooglePostMsg = (url) => {
  const win = openGooglePopup(url);

  return new Promise((resolve, reject) => {
    let counter = 0;
    const popupTimeout = setInterval(() => {
      ++counter;

      if (counter >= 6000 && !win) {
        clearTimeout(popupTimeout);
        reject('popup_disabled');
      }

      if (win) {
        clearTimeout(popupTimeout);

        const closedInterval = setInterval(() => {
          if (win.closed) {
            window.removeEventListener('message', getMessageFromPopup);
            clearInterval(closedInterval);
            reject('popup_closed_by_user');
          }
        }, 500);

        const getMessageFromPopup = (event) => {
          const allowedOrigin =
            process.env.NODE_ENV === 'production'
              ? 'https://www.dingandtones.com'
              : 'http://localhost:3000';

          if (!win || allowedOrigin !== event.origin || !event.data.search) {
            window.removeEventListener('message', getMessageFromPopup);
            clearInterval(closedInterval);
            reject('access_denied');
          } else {
            resolve(event.data.search);
          }
          window.removeEventListener('message', getMessageFromPopup);
          clearInterval(closedInterval);
        };

        window.addEventListener('message', getMessageFromPopup);
      }
    });
  }, 100);
};

export const getGoogleCode = (msg) => {
  const state = (msg.match(/state=([^&]+)/) || [])[1];
  const code = (msg.match(/code=([^&]+)/) || [])[1];
  return state === 'google' ? code : '';
};
