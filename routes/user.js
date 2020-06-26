const express = require('express');
const { signIn, signOut } = require('../controllers/user');

const router = express.Router();

router.post('/signIn', signIn);
router.post('/signOut', signOut);

module.exports = router;
