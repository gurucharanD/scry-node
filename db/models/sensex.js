const mongoose = require('mongoose')
const SensexSchema = mongoose.Schema({
    Date: {
        type: Date,
        // default: Date.now,
        // require: true
    },
    Open: {
        type: Number,
        // required: true
    },
    Close: {
        type: Number,
        // require: true
    },
    High: {
        type: Number,
    },
    Low: {
        type: Number,
    }
})

module.exports = mongoose.model('SensexData', SensexSchema)