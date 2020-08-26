const db = require('../db');
//seleciona o heroi pela classe e mais proximo de acordo a latitude e longtitude
exports.selectHero= async (values)=>{
    let {classeHero,lat,lng} = values;
    
    let query = ` SELECT id_hero,id_usuario,nome,lat,lng,
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
     let valuesOfquery = [classeHero,lat,lng] ;
     return await db.select(query,valuesOfquery);          

}
