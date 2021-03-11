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

router.get('/googleURL', getGoogleURL);
router.post('/user', checkAuth, updateUserInfo);
router.post('/session', getUserId, checkSession);
router.post('/signIn', signInWithGoogle);
router.post('/signOut', signOut);

module.exports = router;
