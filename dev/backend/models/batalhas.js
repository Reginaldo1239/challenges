const db = require('../db/index');
exports.listarBatalhas=(values)=>{
   let {id_usuario,limit,page} = values;
   let query =  "select * from batalhas As b inner join heroes AS h ON (b.id_hero=h.id_hero OR b.id_hero=NULL) WHERE h.id_usuario=? LIMIT ? OFFSET ?";
   let valuesOfquery =  [id_usuario,parseInt(limit),page*limit];
return db.select(query,valuesOfquery);
}

