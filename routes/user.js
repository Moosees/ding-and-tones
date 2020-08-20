const express = require('express');
const { saveUser, signIn } = require('../controllers/user');
const { checkAuth } = require('../middleware/auth');

const router = express.Router();

router.post('/signIn', signIn);
router.post('/user', checkAuth, saveUser);

module.exports = router;
