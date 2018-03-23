const express = require('express');
const app = express();
const errorHandler = require('errorhandler');
const mongoose = require('mongoose');
const winston = require('winston');
const loggerDefault = winston.loggers.get('default');
const account = require('./controllers/account.controller');

mongoose.connect('mongodb://127.0.0.1:27017/mongodb').catch((err)=>{loggerDefault.info(err.message)});
app.use(express.json());
app.use('/account', account);
app.use(errorHandler);
app.listen(3000, function () {
  loggerDefault.info('Example app listening on port 3000!')
});