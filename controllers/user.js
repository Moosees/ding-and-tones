const User = require('../models/user');

exports.signIn = (req, res) => {
  User.findOne({ email: req.body.email }, (error, user) => {
    if (error || !user) {
      //create User
    }

    // sign in
};

exports.signOut = (req, res) => {
  // sign out

  return res.json({ message: 'Signed out' });
};
