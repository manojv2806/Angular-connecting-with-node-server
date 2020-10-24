var express = require('express');
var app = express();
const routes = require('express').Router();
var controller = require('../controller/controller2.js');
app.get('/test2', controller.test2);
module.exports = app;