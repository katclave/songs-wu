const express = require('express');
const Router  = express.Router();

Router.use('/songs', require('./Songs'));
Router.use('/royalties', require('./Royalties'));

module.exports = Router;
