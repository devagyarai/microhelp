const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// GET all questions
router.get('/', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST a new question
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    try {
        const question = new Question({ title, description });
        const saved = await question.save();
        res.json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;