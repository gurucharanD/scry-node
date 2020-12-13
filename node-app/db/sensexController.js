const sensex = require('./models/sensex')

async function fetchData(page) {
    let recordsCount;
    if (page === 0) {
        recordsCount = await getRecordCount();
    }
    return new Promise((resolve, reject) => {
        sensex.find().sort({ Date: 'desc' }).skip(page * 30).limit(30).exec((err, sensexdata) => {
            err ? reject({ error: err }) : resolve({ sensexdata, recordsCount });
        });
    })

}

function insertData(data) {
    let sensexData = new sensex({
        Open: data.Open,
        Close: data.Close,
        Date: Date.now()
    })
    return new Promise((resolve, reject) => {
        sensexData.save((err, status) => {
            err ? reject({ error: err }) : resolve({ sensexdata: status });
        })
    })

}

function getRecordCount() {
    return new Promise((resolve, reject) => {
        sensex.countDocuments({}, function (err, count) {
            err ? reject({ error: err }) : resolve(count);
        });
    })

}

module.exports.fetchData = fetchData;
module.exports.insertData = insertData;