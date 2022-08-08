const express = require('express');
const {
  updateUserInfo,
  getGoogleToken,
  getGoogleURL,
  signInWithGoogle,
  signOut,
  checkSession,
} = require('../controllers/user');
const { checkAuth, getUserId } = require('../middleware/auth');

const router = express.Router();

// Sign in and out
router.get('/googleURL', getGoogleURL);
router.post('/session', getUserId, checkSession);
router.post('/signIn', signInWithGoogle);
router.post('/signOut', signOut);

// Update user
router.post('/user/info', checkAuth, updateUserInfo);
// router.post('user/audio');

module.exports = router;
