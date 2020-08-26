var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const socketClient = require('./servicos/socket-client/index');

socketClient.novaAmeaca();
http.listen(3000, () => {
  console.log('listening on *:3000');
})

//