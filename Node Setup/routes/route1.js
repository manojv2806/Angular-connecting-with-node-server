var express = require('express');
var app = express();
const routes = require('express').Router();
var controller = require('../controller/controller1.js');
app.get('/test1', controller.test1);
module.exports = app;
