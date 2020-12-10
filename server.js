//import required modules
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const db = require('./db/dbBootstrap');
const app = express()
const route = require('./routes/route')


//Port
const port = process.env.serverport || 3000

//adding middleware
app.use(cors())
app.use(bodyparser.json())


app.use('/api', route)

app.listen(port, () => {
    console.log("server running")
    db.dbBootsrap();
    db.bulkInsertData();
})

