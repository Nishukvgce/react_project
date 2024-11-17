const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User');

const app = express();
app.use(bodyParser.json());
app.use(cors());  // Allow cross-origin requests (for development)

const PORT = 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/userDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log("Error connecting to MongoDB: ", err));

// User Schema
const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User', userSchema);

// Register route
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.json({ success: true, message: 'User registered successfully!' });
  } catch (err) {
    res.json({ success: false, message: 'Error registering user: ' + err.message });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: 'User not found!' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.json({ success: true, message: 'Login successful!' });
    } else {
      res.json({ success: false, message: 'Incorrect password!' });
    }
  } catch (err) {
    res.json({ success: false, message: 'Error logging in: ' + err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
