const { query } = require("express");
const batalhasModel = require('../models/batalhas');
const config = require('../config');
exports.listarBatalhas= async (req,res)=>{
let {id_usuario} = req.headers;
let {page,limit} = req.query;
   console.log(123)
   try{ 
     let listBatalhas = await batalhasModel.listarBatalhas({id_usuario,page,limit});
     if(listBatalhas.length>0){
         res.status(200).send(listBatalhas);
     }else{
         res.status(404).send(listBatalhas);
     }
   }catch(e){
       console.log(e)
       res.status(503)(config.ERROR503);
   }
}