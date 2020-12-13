//import required modules
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db/dbBootstrap');
const app = express()
const route = require('./routes/route')
const http = require('http');
const sockets = require('./socketConfig');
//Port
const port = process.env.serverport || 3000

//adding middleware
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Content-Length, Content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});



var server = http.createServer(app);
app.use('/', route)

server.listen(3000, () => {
    console.log("server running")
    db.dbBootsrap();
    db.bulkInsertData();
    sockets.configureSockets(server);
});


// app.listen(port, () => {
//     console.log("server running")
//     db.dbBootsrap();
//     // db.bulkInsertData();
//     sockets.configureSockets(app);
// })

