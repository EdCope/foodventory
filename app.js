const express = require('express');
const testRouter = require('./routes/testfile');
const pantryRouter = require('./routes/pantry');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const path = require("path");
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors({ origin: true, credentials: true }));

app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("*", (req, res) => {
    let url = path.join(__dirname, "frontend/build", "index.html");
    if (!url.startsWith("/app/"))
      // since we're on local windows
      url = url.substring(1);
    res.sendFile(url);
  });

app.use('/', testRouter);
app.use('/user', userRouter);
app.use('/pantry', pantryRouter);
app.use('/auth', authRouter);

module.exports = app;
