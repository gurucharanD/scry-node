//import required modules
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db/dbBootstrap');
const app = express()
const route = require('./routes/route')


//Port
const port = process.env.serverport || 3000

//adding middleware
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cross Origin middleware
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})


app.use('/', route)

app.listen(port, () => {
    console.log("server running")
    db.dbBootsrap();
    db.bulkInsertData();
})

