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
    let popupTimeout;
    let closedInterval;

    const getMessageFromPopup = (event) => {
      const allowedOrigin =
        process.env.NODE_ENV === 'production'
          ? 'https://www.dingandtones.com'
          : 'http://localhost:3000';

      if (win && allowedOrigin === event.origin && event.data.search) {
        runCleanup();
        resolve(event.data.search);
      }
    };

    const runCleanup = () => {
      window.removeEventListener('message', getMessageFromPopup);
      if (popupTimeout) clearTimeout(popupTimeout);
      if (closedInterval) clearInterval(closedInterval);
    };

    popupTimeout = setInterval(() => {
      ++counter;

      if (counter >= 6000 && !win) {
        runCleanup();
        reject('popup_disabled');
        return;
      }

      if (win) {
        popupTimeout && clearTimeout(popupTimeout);

        closedInterval = setInterval(() => {
          if (win.closed) {
            runCleanup();
            reject('popup_closed_by_user');
            return;
          }
        }, 500);

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
