const io = require('socket.io-client');

   
exports.novaAmeaca=()=> {
        let socket =  io('https://zrp-challenge-socket.herokuapp.com');
        socket.on('occurrence',(socket1)=>{
          console.log(socket1)
        }); 
       
    }
        