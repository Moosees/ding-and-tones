const { OAuth2Client } = require('google-auth-library');

exports.getClient = () => {
  return new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
};

exports.getAuthUrl = () => {
  const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_SECRET,
    process.env.GOOGLE_REDIRECT
  );

  const authUrl = client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/userinfo.profile',
  });

  return authUrl;
};
