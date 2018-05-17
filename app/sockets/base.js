module.exports = function (io) {
    // 'use strict';
    // io.on('connection', function(socket) {  
    //     console.log('Client connected...');
    // });
    io.on('connection', function(socket){
        socket.on('chat message', function(msg){
          console.log('message: ' + msg);
          socket.emit('notification', { message: msg });
        });
    });
}