const { Address }  = require('../models');
const { Op } = require('sequelize');

const express = require('express');
const router = express.Router();

router.get('/items', async (req, res) => {
    const items = await Address.findAll();

    res.json(items);
});

router.post('/items', async (req, res) => {
    const newItem = await Address.create(req.body);
    res.json(newItem);
});

module.exports = router;
