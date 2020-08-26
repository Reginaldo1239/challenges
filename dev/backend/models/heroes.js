const db = require('../db/index');

exports.newHero= async (values)=>{
    const TABLE = 'heroes';
    let {id_usuario,nome,classe,lat,lng}= values;

    let post={id_usuario,nome,classe,lat,lng};
    return await db.insert(TABLE,post);
}
exports.updateHero = async (values)=>{
    let {id_usuario,nome,classe,lat,lng} =values;
 //   'UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?', ['a', 'b', 'c'
    let query = "UPDATE heroes SET nome= ?, classe = ? , lat = ? ,lng = ? WHERE id_usuario=? LIMIT 1";
    let valuesOfQuery = [nome,classe,lat,lng,id_usuario];
    return await db.update(query,valuesOfQuery);
}
exports.getOneHero= async (values)=>{
    let {id_usuario,id_hero} = values;
    let query = "SELECT * from heroes WHERE id_usuario=? AND id_hero=?";
    let valuesOfQuery = [id_usuario,id_hero];
    return await db.select(query,valuesOfQuery); 
}
exports.listHeroes = async (values)=>{
    let {id_usuario,limit,page} = values;
    let query ="SELECT * FROM heroes WHERE id_usuario=? LIMIT ? OFFSET ?";
    let valuesOfQuery=[id_usuario,parseInt(limit),page*page];
    return await db.select(query,valuesOfQuery); 
}

exports.deleteHero = async  values =>{
    let {id_usuario,id_hero}  =values;
    let query = `DELETE FROM heroes WHERE id_usuario=${id_usuario} AND id_hero=${id_hero}`;
    return await db.delete(query);
}

