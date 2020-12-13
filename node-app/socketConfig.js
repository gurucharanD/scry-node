const sensexController = require('./db/sensexController');

function configureSockets(server) {
    // const server = require('http').createServer(app);
    const io = require('socket.io')(server, {
        cors: {
            credentials: true,
            origin: "http://localhost:4200",
            allowedHeaders: ["Content-Length", "Content-type"],
            allowedOrgigins: '*'
        }
    });

    io.on('connection', socket => {
        console.log('connection established');
        socket.on('dataAdded', async data => {
            sensexController.insertData(data).then(response => {
                response.error ? console.log('error saving data') : socket.broadcast.emit('newdataAdded', data);
            });
        });
        socket.on('disconnect', () => {
            console.log('connection disconnect');
        });
    });
}


module.exports.configureSockets = configureSockets;