var io = require( 'socket.io-client');
var socket = io( 'http://127.0.0.1:8888');

socket.on( 'connect',
    function() {
        console.log( 'connected!');
        socket.send( 'first time.. nice to meet you.');
        console.log( '(sent first msg)');
    }
);

socket.on( 'message', function( data) {
    console.log( "received from server----------");
    console.log( data);
    console.log( "------------------------------");

    setTimeout( function(){ socket.send( 'nice to meet you too.'); },1000);
});
