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
        socket.on('dataAdded', data => {
            console.log('-->', data)
            socket.broadcast.emit(data);
        });
        socket.on('disconnect', () => {

        });
    });
}


module.exports.configureSockets = configureSockets;