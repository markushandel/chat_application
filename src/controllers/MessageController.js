const Message = require('../models/Message');
const User = require('../models/User');

// Handle message creation
exports.createMessage = async (req, res) => {
    try {
        const { content, sender } = req.body;
        console.log("createMessage", req.body);

        // Check if the sender and receiver exist
        const user = await User.findOne(
            {
                where: { username: sender },
            });
        if (!user) {
            return res.status(404).json({ error: 'Sender or receiver not found' });
        }

        // Create a new message
        const newMessage = await Message.create({ content, UserId: user.id });

        // Respond with the newly created message
        return res.status(201).json(newMessage);
    } catch (error) {
        console.error('Error creating message:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Handle message retrieval
exports.getMessages = async (req, res) => {
    try {
        // Retrieve messages for the specified user
        const messages = await Message.findAll({
            include: [{
                model: User,
                attributes: ['username'],
            }],
        });

        console.log("getMessages", messages);
        // Respond with the retrieved messages
        return res.status(200).json(messages);
    } catch (error) {
        console.error('Error retrieving messages:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

