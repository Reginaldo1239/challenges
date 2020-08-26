const jwt = require('jsonwebtoken')
exports.gerarTokenJwt = (objectWithValues)=>{
    console.log(objectWithValues)
     return new Promise((resolver,reject)=>{
   try{      
          jwt.sign(objectWithValues, 'privatssseKey', { algorithm: 'HS512' }, function(err, token) {
            if(err){
                console.log(err)
                resolver(false);
            }else{
                resolver(token);
            } 
            });
    }catch(e){
            reject(false);
            console.log(e);
    }
     })
}

 exports.verificarTokenJwt = (token)=>{
  return  new Promise((resolver,reject)=>{
    try{
            jwt.verify(token, 'privatssseKey' , { algorithms: ['HS512'] }, function (err, payload) {
            if(err){
                console.log(err);
                resolver(false)
            }
            resolver(payload)
            });
    }catch{
            console.log(e);
            reject(false)
    }
       })
    
}