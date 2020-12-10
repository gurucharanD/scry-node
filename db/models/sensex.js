const mongoose = require('mongoose')
const SensexSchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
        require: true
    },
    open: {
        type: Number,
        required: true
    },
    close: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('SensexData', SensexSchema)