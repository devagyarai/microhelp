const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// In-memory “database”
let questions = [];
let answers = [];

// Routes
app.get('/', (req, res) => res.send('MicroHelp Demo Backend Running!'));

// Questions routes
app.get('/api/questions', (req, res) => res.json(questions));

app.post('/api/questions', (req, res) => {
    const question = { id: Date.now(), ...req.body };
    questions.push(question);
    res.json(question);
});

// Answers routes
app.get('/api/answers/:questionId', (req, res) => {
    const qId = parseInt(req.params.questionId);
    const filtered = answers.filter(a => a.questionId === qId);
    res.json(filtered);
});

app.post('/api/answers', (req, res) => {
    const answer = { id: Date.now(), ...req.body };
    answers.push(answer);
    res.json(answer);
});

// Start server
app.listen(PORT, () => console.log(`🚀 Demo server running on http://localhost:${PORT}`));