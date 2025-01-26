const User = require('../models/User');

exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate('followers following', 'name avatar');
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateProfile = async (req, res) => {
    const { bio, avatar } = req.body;
    try {
        const user = await User.findByIdAndUpdate(req.user.id, { bio, avatar }, { new: true });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

