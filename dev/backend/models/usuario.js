const db = require('../db');
exports.login= async (values)=>{
    let {nome,senha} = values;
    let query = 'SELECT id_usuario FROM usuarios WHERE nome=? AND senha=? LIMIT 1';
    let valuesOfQuery = [nome,senha];
    return await db.select(query,valuesOfQuery);
} 