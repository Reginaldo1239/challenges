const io = require('socket.io-client');
const socketClientModel = require('../models/socket-client');
   
exports.novaAmeaca= async ()=> {
        let socket =  io('https://zrp-challenge-socket.herokuapp.com');
        socket.on('occurrence',async (moster)=>{
            let classeHero ;
            let {lat,lng} = moster.location[0];
            let { dangerLevel,monsterName}= moster;
              switch(dangerLevel){
                  case 'God':
                    classeHero='S'
                    break;
                  case 'Dragon':
                    classeHero ='A'
                    break;
                  case 'Tiger':
                    classeHero = 'B'
                    break;
                  case 'Wolf':
                    classeHero ='C'      
              }
        let heroSelected= await  socketClientModel.selectHero({lat,lng,classeHero});
        let registrarBatalha;
        if(heroSelected.length>0){
          //distance_in_km é a distancia do ponto em que o heroi se encontra até o mostro;
          let {id_hero,distance_in_km} = heroSelected[0]
           registrarBatalha = await socketClientModel.registarNovaBatalha({id_hero,distance_in_km,dangerLevel,monsterName});     
        }else{
            //como não encontrou nenhum heroi que é pareo para o mostro,a batalha foi perdida e é registrado apenas infomações do mostro no banco de dados
           registrarBatalha = await socketClientModel.registarNovaBatalha({dangerLevel,monsterName});
         
        }
        console.log(registrarBatalha);
     
        console.log(moster)
        console.log(heroSelected)

        }); 
        
    }
        
    // create table usuarios(id_usuario int(11) primary key auto_increment not null,nome varchar (30) not null,senha varchar(30) not null ,atualizado DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP not null,criado DATETIME DEFAULT CURRENT_TIMESTAMP not null);
    // create Table heroes (id_hero int(11) primary key auto_increment not null,name varchar(30) not null,classe varchar(1) not null,lat DECIMAL(10, 8) NOT NULL, lng DECIMAL(11, 8) NOT NULL,atualizado DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP not null,criado DATETIME DEFAULT CURRENT_TIMESTAMP not null);
    