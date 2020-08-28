const usuario = require('../models/usuario');
const validacao = require('../util/validacao');
const criptography  = require('../util/cryptography');
const CONFIG  =require('../config');
exports.login= async (req,res)=>{
    let {nome,senha} =req.body;
    let erros= [];
    let msgErro= {msg:''};    
    let usuarioValido;
    if(!validacao.minLength(nome,1)){
        erros.push({nome:'é obrigatorio'});
        msgErro.msg= 'o parametro nome é obrigatorio';
    }
    if(!validacao.minLength(senha,1)){
        erros.push({senha:'está vazio'});
        msgErro.msg= 'o parametro senha é obrigatorio';
    }

 if(erros.length===0){ 
    try{
                usuarioValido = await usuario.login({nome,senha});
                if(usuarioValido.length>0){
                    let token=await  criptography.gerarTokenJwt({id_usuario:usuarioValido[0].id_usuario});
                        if(token !=false){
                            res.status(200).send({token,id_usuario:usuarioValido[0].id_usuario,nome});
                        }else{
                            res.status(503).send(CONFIG.ERROR503);
                        }
                }else{
                    msgErro.msg="nome ou senha invalida"
                    res.status(404).send(msgErro);
                }
     }catch(e){
            console.log(e);
               res.status(503).send(CONFIG.ERROR503);
           }  
    }else{
        res.status(400).send(msgErro);
    }
     
  }