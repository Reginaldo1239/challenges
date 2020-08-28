const request = require('supertest');
const LOCALHOST = 'http://localhost:3005';
const  token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjoxLCJpYXQiOjE1OTg1NTQ2Mzd9.IZLAOk-IPPz7EG4OORX3jiHRISA5wyM3Knn6cFB0XE0nO0xdLj8nhUw2wNLjlbll807eGg0UMYCaHONyCrtiow'

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