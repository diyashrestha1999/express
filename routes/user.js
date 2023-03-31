const { User }  = require('../models');
const { Op } = require('sequelize');

const express = require('express');
const router = express.Router();

router.get('/items', async (req, res) => {
    const items = await User.findAll();

    res.json(items);
});

router.post('/items', async (req, res) => {
    const newItem = await User.create(req.body);
    res.json(newItem);
});

module.exports = router;
