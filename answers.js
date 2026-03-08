const express = require('express');
const router = express.Router();
const Answer = require('../models/Answer');

// GET all answers for a question
router.get('/:questionId', async (req, res) => {
    try {
        const answers = await Answer.find({ questionId: req.params.questionId });
        res.json(answers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST a new answer
router.post('/', async (req, res) => {
    const { questionId, content } = req.body;
    try {
        const answer = new Answer({ questionId, content });
        const saved = await answer.save();
        res.json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;