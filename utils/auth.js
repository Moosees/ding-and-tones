const { OAuth2Client } = require('google-auth-library');

exports.getClient = () => {
  return new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
};
