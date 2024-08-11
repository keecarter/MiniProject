// routes/users.js
import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';  // Make sure the path is correct

const router = express.Router();

// User registration route
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User created successfully' }); // JSON response on success
  } catch (err) {
    res.status(500).json({ message: 'Server error' }); // JSON response on error
  }
});

export default router;
