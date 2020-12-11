const sensex = require('./models/sensex')

function fetchData(page) {
    return new Promise((resolve, reject) => {
        sensex.find().sort({ Date: 'desc' }).skip(page * 30).limit(30).exec((err, sensexdata) => {
            err ? reject({ error: err }) : resolve({ sensexdata });
        });
    })

}

function insertData(data) {
    let sensexData = new sensex({
        Open: data.open,
        Close: data.close,
        Date: Date.now()
    })
    return new Promise((resolve, reject) => {
        sensexData.save((err, status) => {
            err ? reject({ error: err }) : resolve({ sensexdata: status });
        })
    })

}

module.exports.fetchData = fetchData;
module.exports.insertData = insertData;