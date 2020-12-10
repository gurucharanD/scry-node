const express = require('express')
const router = express.Router()
const sensex = require('../db/models/sensex')


router.get('/fetchsensexdata', (req, res) => {
    const page = req.body.page - 1;
    sensex.find().sort({ date: 'desc' }).skip(page * 30).limit(30).exec((err, sensexdata) => {
        err ? res.send({ error: err })
            : res.send({ sensexdata })
    });
})

router.post('/addsensexdata', (req, res) => {
    let data = new sensex({
        open: req.body.open,
        close: req.body.close,
    })
    data.save((err, data) => {
        if (err) {
            res.json({ msg: 'failed to add sensexdata' })
        } else {
            res.json({ msg: 'added sensexdata successfully', data })
        }
    })
})

module.exports = router