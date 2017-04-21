var server = require( 'socket.io')(8888);

var simple = server.on( 'connection', function( socket) {
    console.log( 'someone connect.');

    socket.on( 'message', function( data) {
        console.log( 'received message is ---------------');
        console.log( data);
        console.log( '--------------------------');

        socket.broadcast.send( data); // send to everyone EXCEPT 'socket'
        socket.send( data); // send to 'socket'
        console.log( 'I echoed for msg.');
    });

    socket.on( 'disconnect', function() {
        console.log( 'someone disconnect.');
        socket.broadcast.send( 'someone disconnect.');
    });
});
