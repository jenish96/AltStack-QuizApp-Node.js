const express = require('express');
const app = express();
const routes = require('./routes/index');
const cors = require('cors')
app.use(express.json());

app.use(express.static('public'));
app.use('/api/quiz', routes);

app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/../public/index.html');
})

app.listen(5000, () => {
    console.log("Sever is running on http://127.0.0.1:5000")
})