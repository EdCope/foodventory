const express = require('express');
const testRouter = require('./routes/testfile');
const pantryRouter = require('./routes/pantry');
const userRouter = require('./routes/user');
const sessionRouter = require('./routes/session');

const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors({ origin: true, credentials: true }));

app.use('/', testRouter);
app.use('/user', userRouter);
app.use('/pantry', pantryRouter);
app.use('/session', sessionRouter);

module.exports = app;
