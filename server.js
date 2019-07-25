const express = require('express');
const auth = require('./auth/authRoute');
const users = require('./users/usersRoute');
const server = express();

server.use(express.json());
server.use('/api/people', users);


module.exports = server;