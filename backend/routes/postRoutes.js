const express = require('express');
const { createPost, getPosts } = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createPost);
router.get('/', getPosts);

module.exports = router;
