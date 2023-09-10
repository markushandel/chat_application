// UserController.js
const User = require('../models/User');

// Handle user registration
exports.registerUser = async (req, res) => {
  try {
    console.log("registerUser");
    const { username, password } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({ where: { username: username } });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Create a new user
    const newUser = await User.create({ username: username, password: password });

    // Respond with the newly created user
    return res.status(201).json(newUser);
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Handle user login
exports.loginUser = async (req, res) => {
  // Extract user credentials from the request body
  const { username, password } = req.body;

  try {
    // Find the user in the database
    const user = await User.findOne({ where: { username: username } });

    // Check if the user exists and the password matches
    if (user && user.password === password) {
      // User found and password matches, handle successful login
      // ...

      // Send a success response
      res.status(200).json({ message: 'Login successful' });
    } else {
      // User not found or password does not match, handle login failure
      // ...

      // Send an error response
      res.status(401).json({ error: 'Invalid username or password' });
    }
  } catch (error) {
    // Handle errors
    console.error('Error during login:', error);
    res.status(500).json({ error: 'An error occurred during login' });
  }
}

