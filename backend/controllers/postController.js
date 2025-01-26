const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    const { content } = req.body;
    try {
        const post = new Post({ content, author: req.user.id });
        await post.save();
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'name avatar').sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
