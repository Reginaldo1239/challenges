const validation = require('../../util/validacao');

exports.batalhas = (req,res,next)=>{
    const LIMIT_FOR_REQUEST =100;
    let {page,limit} = req.query;
 let msgError = {msg:''};
 let errors=[];

  if(!validation.minLength(page,1)){
     errors.push({page:'o parametro page é obrigatorio'});
     msgError.msg='o parametro page é obrigatorio';
  }else if(!validation.isNumber(page)){
    errors.push({page:'o parametro page aceita apenas números'});
    msgError.msg='o parametro page é obrigatorio';
  }
 if(!validation.minLength(limit,1)){
    errors.push({page:'o parametro limit é obrigatorio'});
    msgError.msg='o parametro limit é obrigatorio';
 }else if(!validation.isNumber(limit)){
    errors.push({page:'o parametro limit aceita apenas números'});
    msgError.msg='o parametro limit aceita apenas números';
 }else if(limit>LIMIT_FOR_REQUEST){
    errors.push({page:`o parametro limit retorna no máximo ${LIMIT_FOR_REQUEST} batalhas por solicitação`});
    msgError.msg=`o parametro limit retorna no máximo ${LIMIT_FOR_REQUEST} batalhas por solicitação`;
 }
 
 if(errors.length===0){
     next();
 }else{
    res.status(400).send(msgError);
 }
}