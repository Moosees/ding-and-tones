const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');

exports.getClient = () => {
  return new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_SECRET,
    process.env.GOOGLE_REDIRECT
  );
};

exports.generateJWT = (id) => jwt.sign(id, process.env.JWT_SECRET);
