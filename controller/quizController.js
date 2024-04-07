const questions = require('../questions.json');

const getQuestion = async (req, res) => {
    res.send(questions);
}

const submitQuiz = async (req, res) => {
    const answers = req.body.answers;
    let score = 0;
    let feedback = [];

    for (let i = 0; i < questions.length; i++) {
        if (answers[i] === questions[i].answer) {
            score++;
            feedback.push({ correct: true });
        } else {
            feedback.push({ correct: false, answer: questions[i].options[questions[i].answer] });
        }
    }

    res.json({ score, feedback });
}

module.exports = { getQuestion, submitQuiz }