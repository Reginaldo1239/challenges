const fetch = require('cross-fetch');
const CONFIG = require('../config');
//essa funcao troca o endereco por coordenadas  latitude e longitude
exports.getLatitudeELongiture= async (values)=>{
    let {cidade,pais,bairro} = values;
 let infoEndereco= fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${cidade}+${bairro}+${pais}&key=${CONFIG.KEY_GOOGLE}`)
  .then(res => {
    if (res.status !=200) {
      return false
      }
    return res.json();
  })
  .then(info => {
    return info
  })
  .catch(err => {
    console.log(err);
    return false
  });

   infoEndereco =  await infoEndereco;
  if(infoEndereco!=false){
    let lat= infoEndereco.results[0].geometry.location.lat;
    let lng =infoEndereco.results[0].geometry.location.lng;
    return {lat,lng}
  }else{
    return false;
  }
}