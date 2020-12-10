const mongoose = require('mongoose')
const { Seeder } = require('mongo-seeding');
const config = require('./dbConfig');
const connectionString = `mongodb://${config.host}:${process.env.mongoport}/${config.db}`
const path = require('path');

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

function dbSeeding() {
    console.log('seeding data');
    // const config = {
    //     database: connectionString,
    //     dropDatabase: true,
    // };
    // const seeder = new Seeder(config);
    // const collections = seeder.readCollectionsFromPath(path.join(__dirname, '/data.csv'));
    // seeder
    //     .import(collections)
    //     .then(() => {
    //         console.log('Success');
    //     })
    //     .catch(err => {
    //         console.log('Error', err);
    //     });

}




module.exports.dbBootsrap = dbBootsrap;
module.exports.dbSeeding = dbSeeding;