const db = require('../db');
const validacao = require('../util/validacao');
//seleciona o heroi pela classe e mais proximo de acordo a latitude e longtitude
exports.selectHero = async (values)=>{
    let {classeHero,lat,lng} = values;
    
    let query = ` SELECT id_hero,id_usuario,nome,lat,lng,classe,
                    111.045* DEGREES(ACOS(LEAST(1.0, COS(RADIANS(latpoint))
                                * COS(RADIANS(lat))
                                * COS(RADIANS(longpoint) - RADIANS(lng))
                                + SIN(RADIANS(latpoint))
                                * SIN(RADIANS(lat))))) AS distance_in_km
                FROM heroes
                JOIN (
                    SELECT ? AS latpoint,  ? AS longpoint
                ) AS p ON 1=1
                where classe = ?
                ORDER BY distance_in_km
                LIMIT 1;` 
     let valuesOfquery = [lat,lng,classeHero] ;
     return await db.select(query,valuesOfquery);           
}

exports.registarNovaBatalha = async (values)=>{
    let {id_hero,dangerLevel,monsterName,distance_in_km} = values;
    const TABLE ='batalhas';
    let post={
        moster_danger_level:dangerLevel,
        moster_name:monsterName,
    }
    //verifica se algum heroi participou da batalha;
    if(validacao.minLength(id_hero,1)){
        post.id_hero = id_hero;
        post.distance_of_moster = distance_in_km;
    }
    return await db.insert(TABLE,post);
 
}
