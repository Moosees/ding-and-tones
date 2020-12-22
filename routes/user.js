const express = require('express');
const {
  updateUserInfo,
  getGoogleToken,
  getGoogleURL,
  signInWithGoogle,
} = require('../controllers/user');
const { checkAuth } = require('../middleware/auth');

const router = express.Router();

router.get('/googleURL', getGoogleURL);
router.post('/user', checkAuth, updateUserInfo);
router.post('/signIn', signInWithGoogle);

module.exports = router;
