var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database setup
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/exam');

var Exam = require('./src/model/Exam');
var Question = require('./src/model/Question');

var port = process.env.PORT || 8080;

var examRoutes = require('./src/routes/exam');
var questionRoutes = require('./src/routes/question');
app.use('/api', examRoutes);
app.use('/api', questionRoutes);

app.listen(port);
console.log('Server listening on port ', port);