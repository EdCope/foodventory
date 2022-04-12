const express = require('express');
const testRouter = require('./routes/testfile');
const pantryRouter = require('./routes/pantry');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const path = require("path");
const cors = require('cors');

const app = express();

app.use(express.json())

app.use('/', testRouter);
app.use('/user', userRouter);
app.use('/pantry', pantryRouter);
app.use('/auth', authRouter);


app.use(express.static(path.join(__dirname, "frontend/build")));

app.use(cors());

app.get("*", (req, res) => {
    let url = path.join(__dirname, "frontend/build", "index.html");
    res.sendFile(url);
  });



module.exports = app;
