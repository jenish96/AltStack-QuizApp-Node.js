const express = require('express');
const app = express();
const { getQuestion, submitQuiz } = require('../controller/quizController');

app.get('/questions', getQuestion)
app.post('/', submitQuiz)

module.exports = app