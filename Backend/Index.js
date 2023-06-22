const express = new require('express');
const cors = require('cors');
const { mongoose } = require('mongoose');
const User = require('./Models/User.js');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

require('dotenv').config();
const jwt = require('jsonwebtoken');

const app = express();
const port = 4000;

const secretToken = process.env.SECRET_TOKEN;

const salt = bcrypt.genSaltSync(10);
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(cookieParser());

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb+srv://kumroshan120:zRpJp2fPlqR9SNqO@dentsuassignment.d3pog7s.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get('/', function (req, res) {
  res.json('Hello Test! Im Roshan.waa is a blog website');
});

app.post('/register', async (req, res) => {
  const { userName, userEmail, userPassword } = req.body;
  try {
    const userDoc = await User.create({
      userName,
      userEmail,
      userPassword: bcrypt.hashSync(userPassword, salt),
    });
    res.json(userDoc);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post('/login', async (req, res) => {
  const { userEmail, userPassword } = req.body;

  const userDoc = await User.findOne({ userEmail });
  const passOk = bcrypt.compareSync(userPassword, userDoc.userPassword);

  if (passOk) {
    jwt.sign(
      { userEmail, id: userDoc._id },
      secretToken,
      {},
      (err, resToken) => {
        if (err) throw err;
        res.cookie('token', resToken).json({
          id: userDoc._id,
          userEmail,
        });
      }
    );
  } else {
    res.status(400).json('Wrong password!');
  }
});

app.get('/profile', (req, res) => {
  const { token } = req.cookies;

  jwt.verify(token, secretToken, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post('/signOut', (req, res) => {
  res.cookie('token', '').json('Ok');
});

app.listen(port);
