var express = require('express')

var app = express()
var http = require('http').createServer(app);


const socketClient = require('./servicos/socket-client/index');
const routerPrivate = require('./routers/private');
const routerPublic  = require('./routers/public');
const authMiddleware = require('./middleware/auth');
const config = require('../backend/config');
socketClient.novaAmeaca();
app.use(express.json()) // for parsing application/json

app.use('/public',routerPublic);
app.use('/',authMiddleware.authUser,routerPrivate);

http.listen(3005, () => {
  console.log('listening on *:3000');
//  console.log(config);
})

// 