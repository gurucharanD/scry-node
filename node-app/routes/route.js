const express = require('express')
const router = express.Router()
const sensexController = require('../db/sensexController');

router.post('/fetchsensexdata', async (req, res) => {
    const page = req.body.page - 1;
    const data = await sensexController.fetchData(page);
    res.send(data);
})

router.post('/addsensexdata', async (req, res) => {
    const data = await sensexController.insertData({
        open: req.body.Open,
        close: req.body.Close,
    });
    res.send(data);
})

module.exports = router