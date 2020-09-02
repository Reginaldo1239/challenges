const request = require('supertest');
const CONFIG = require('../../config')
const LOCALHOST = `http://localhost:${CONFIG.PORT}`;
const  token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjoyLCJpYXQiOjE1OTg5NTEyNjl9.2tsNwx2xs5gNHOJL5VuaWf-pevJE-PLJxG4WlJLwC9lwsQwqsSorpy8-5SFRNNR1z-eBdb2K2jVhHXEklpJiUQ'

//postPublic para testes que não exige autenticação
exports.postPublic =(values)=>{
  let {endPoint,body} =values;
  return new Promise ((resolver,reject)=>{
  request(LOCALHOST)
      .post(endPoint)
      .send(body)
      .set('Accept', 'application/json')
      .end(function(err, res) {  
        if (err){
      }else{ 
          let {text,status} = res;
            text = JSON.parse(text);
          resolver({text,status})
      }
  
      });
})
}
exports.post =(values)=>{
    let {endPoint,body} =values;
    return new Promise ((resolver,reject)=>{
    request(LOCALHOST)
        .post(endPoint)
        .send(body)
        .set('Accept', 'application/json')
        .set('token',token)
    .end(function(err, res) {
            
          if (err){

        }else{
            let {text,status} = res;
              text = JSON.parse(text);
            resolver({text,status})
        }
        });
})
}
exports.put =(values)=>{
  let {endPoint,body} =values;
  return new Promise ((resolver,reject)=>{
  request(LOCALHOST)
      .put(endPoint) 
      .send(body)
      .set('Accept', 'application/json')
      .set('token',token)
  .end(function(err, res) {
          
        if (err){

      }else{ 
          let {text,status} = res;
            text = JSON.parse(text);
          resolver({text,status})
      }
      });
})
}
exports.get =(values)=>{
  let {endPoint} =values;

  return new Promise ((resolver,reject)=>{
  request(LOCALHOST)
      .get(endPoint)
      .set('Accept', 'application/json')
      .set('token',token)
      .end(function(err, res) {
          
        if (err){ 

      }else{
          let {text,status} = res;
            text = JSON.parse(text);
          resolver({text,status})
      }
      });
})
}