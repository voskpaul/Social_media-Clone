const express = require('express');
const { getUserProfile, updateProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/:id', getUserProfile);
router.put('/', authMiddleware, updateProfile);

module.exports = router;
