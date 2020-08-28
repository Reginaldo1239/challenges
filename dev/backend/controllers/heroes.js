const validacao = require('../util/validacao');
const heroModel = require('../models/heroes');
const  geoCoding = require('../servicos/geoCoding');
const CONFIG = require('../config');
exports.newHero =async (req,res)=>{
    let {nome,classe,cidade,bairro} = req.body;
    let {id_usuario} = req.headers;
    let errors = [];
    let error = {msg:''};
   
   let latELng= await  geoCoding.getLatitudeELongiture({cidade:'sao paulo',bairro:'pinheiros',pais:'brasil'});
    if(latELng===false){
        errors.push({latELng:'ocorreu algumm erro ao obter as coordenadas geograficas,verifique o endereço'})
        error.msg ='ocorreu algumm erro ao obter as coordenadas geograficas,verifique o endereço';
    }

    if(errors.length===0){
        let {lat,lng} = latELng;
        try{
            let resultInsertNewHero =  await heroModel.newHero({id_usuario,nome,classe,lat,lng});
                resultInsertNewHero.affectedRows>0?res.status(201).send(resultInsertNewHero):res.status(503).send(CONFIG.ERROR503);
        }catch(e){
            console.log(e)
            res.status(503).send(CONFIG.ERROR503);
        }
    }else{
        res.status(400).send(error)
    }
} 

exports.updateHero =async (req,res)=>{
    let {id_usuario} = req.headers;
    let {id_hero} = req.params;
    let {nome,classe,cidade,bairro} = req.body;
    let errors = [];
    let error = {msg:''};
    
    let latELng= await  geoCoding.getLatitudeELongiture({cidade:'sao paulo',bairro:'pinheiros',pais:'brasil'});
    if(latELng===false){
        errors.push({latELng:'ocorreu algumm erro ao obter as coordenadas geograficas,verifique o endereço'})
        error.msg ='ocorreu algumm erro ao obter as coordenadas geograficas,verifique o endereço';
    }

    if(errors.length===0){
        let {lat,lng} = latELng;
        try{
            let resultUpdatedNewHero =  await heroModel.updateHero({id_usuario,nome,classe,lat,lng});
            resultUpdatedNewHero.affectedRows>0?res.status(201).send(resultUpdatedNewHero):res.status(503).send('sss');
        }catch(e){
            console.log(e)
            res.status(503).send('ddd');
        }
    }else{
        res.status(400).send(error)
    }
}


exports.listHeroes = async (req,res)=>{
    let id_usuario= req.headers;
    let {page,limit}= req.query;
     try{   
        let resultListHeroes = await heroModel.listHeroes({id_usuario,limit,page});
            if(resultListHeroes.length>0){
                req.status(200).send(resultListHeroes);
            }else{
                res.status(404).send(CONFIG.ERROR404);
            }
        }catch(e){
            res.status(503).send(CONFIG.ERROR503);
        }   
}

exports.getOneHero= async (req,res)=>{
    let {id_usuario}= req.headers;
    let {id_hero} = req.params;

    try{
        let getHeroResult =await heroModel.getOneHero({id_hero,id_usuario});
            if(getHeroResult.length>0){
                res.status(200).send(getHeroResult);
            }else{
                res.status(404).send(CONFIG.ERROR404);
            }
    }catch(e){
        console.log(e)
        res.status(503).send(CONFIG.ERROR503);
    }
}
exports.deleteHero =async (req,res)=>{
    let {id_hero}= req.params;
    let {id_usuario} = req.headers;
   try{
        let resultDeleteHero = await heroModel.deleteHero({id_usuario,id_hero});
            if(resultDeleteHero.affectedRows>0){
                res.status(200).send(resultDeleteHero);
              }else{
                     res.status(404).send(CONFIG.ERROR404);
                }
        }catch(e){
            console.log(e);
            res.status(503).send(CONFIG.ERROR503);
        }   
}