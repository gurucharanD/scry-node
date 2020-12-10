const mongoose = require('mongoose')
const config = require('./dbConfig');
const connectionString = `mongodb://${config.host}:${process.env.mongoport}/${config.db}`
const sensex = require('./models/sensex')
const sensexData = require('./data.json')

function dbBootsrap() {
    console.log('bootstraping database')
    mongoose.connect(connectionString, { useNewUrlParser: true })
    mongoose.connection.on('connected', () => {
        console.log('connected to db at port:27017')
    })
    //Db connection failure
    mongoose.connection.on('error', (err) => {
        if (err) {
            console.log('ERROR:', err)
        }
    })
    const db = mongoose.connection;
    db.once('open', function () {
        // console.log(db)
        console.log('connection open')
    });
}


function bulkInsertData() {
    for (const data of sensexData) {
        let date;
        if (data.Date) {
            let d = new Date(data.Date)
            date = new Date(d).toLocaleDateString()
        } else {
            date = Date.now();
        }
        let sensexData = new sensex({
            Open: data.Open,
            Close: data.Close,
            Date: date
        })

        sensexData.save((err, status) => {
            if (err) {
                console.log(err)
            }
        })
    }
}



// function bulkInsertData() {
//     sensex.insertMany(data)
//         .then((result) => {
//             console.log("inserted data sucessfully");
//         })
//         .catch(err => {
//             console.error("error ", err);
//         });
// }



module.exports.dbBootsrap = dbBootsrap;
module.exports.bulkInsertData = bulkInsertData;