const validacao = require('../../util/validacao');


exports.newHero =async (req,res,next)=>{
    let {nome,classe,cidade,bairro,pais} = req.body;
    let errors = [];
    let error = {msg:''};
   
    if(!validacao.minLength(nome,1)){
        errors.push({nome:'é obrigatorio'});
        error.msg = 'o parametro nome é obrigatorio'; 
     }else if(!validacao.maxLength(nome,30)){
        errors.push({nome:'aceita no maximo 30 caracteres'})
        error.msg = 'o parametro nome aceita no maximo 30 caracteres'
    }
    if(!validacao.minLength(cidade,1)){
        errors.push({cidade:'é obrigatorio'})
        error.msg = 'o parametro cidade é obrigatorio'
    }
    if(!validacao.minLength(bairro,1)){
        errors.push({bairro:'é obrigatorio'})
        error.msg = 'o parametro bairro é obrigatorio'
    }
    if(!validacao.minLength(pais,1)){
        errors.push({pais:'é obrigatorio'})
        error.msg = 'o parametro pais é obrigatorio'
    }
    if(!validacao.minLength(classe,1)){
        errors.push({classe:' está vazio'});
        error.msg = 'o parametro classe é obrigatorio';
    }else if(!validacao.classeHero(classe)){
        errors.push({classe:'invalida aceitamos apenas S,A,B,C como classes'})
        error.msg ='o parametro classe invalida aceitamos apenas S,A,B,C como classes validas';
    }
    if(errors.length===0){
        next(); 
    }else{
        res.status(400).send(error)
    }
}
exports.updateHero=(req,res,next)=>{
    let {nome,classe,cidade,bairro,pais} = req.body;
    let errors = [];
    let error = {msg:''};
    if(!validacao.minLength(nome,1)){
        errors.push({nome:' está vazio'});
        error.msg = 'o parametro nome está vazio';
     }else if(!validacao.maxLength(nome,30)){
        errors.push({nome:'aceita no maximo 30 caracteres'})
        error.msg = 'o parametro nome aceita no maximo 30 caracteres'
    }
    if(!validacao.minLength(cidade,1)){
        errors.push({cidade:'é obrigatorio'})
        error.msg = 'o parametro cidade é obrigatorio'
    }
    if(!validacao.minLength(bairro,1)){
        errors.push({bairro:'é obrigatorio'})
        error.msg = 'o parametro bairro é obrigatorio'
    }
    if(!validacao.minLength(pais,1)){
        errors.push({pais:'é obrigatorio'})
        error.msg = 'o parametro pais é obrigatorio'
    }
    if(!validacao.minLength(classe,1)){
        errors.push({classe:' está vazio'});
        error.msg = 'o parametro classe está vazio';
    }else if(!validacao.classeHero(classe)){
        errors.push({classe:'invalida aceitamos apenas S,A,B,C como classes'})
        error.msg ='o parametro classe invalida aceitamos apenas S,A,B,C como classes validas';
    }
    if(errors.length===0){
        next();
    }else{
        res.status(400).send(error);
    }

}


exports.listHeroes =(req,res,next)=>{
    let id_usuario= req.headers;
    let {page,limit}= req.query;
    let errors =[];
    let msgError ={msg:''};
    if(!validacao.minLength(page,1)){
        errors.push({page:'parametro é obrigatorio'});
        msgError.msg='parametro limit é obrigatorio';
    }else if(!validacao.isNumber(page)){
        errors.push({limit:'o parametro page aceita apenas numeros'});
        msgError.msg='o parametro page aceita apenas numeros';  
    } 
    if(!validacao.minLength(limit,1)){
        errors.push({limit:'parametro é obrigatorio'});
        msgError.msg='parametro limit é obrigatorio';
    }else if(!validacao.isNumber(limit)){
        errors.push({limit:'o parametro limit aceita apenas numeros'});
        msgError.msg='o parametro limit aceita apenas numeros';  
    }else if(limit>100){
        errors.push({limit:'parametro é obrigatorio'});
        msgError.msg='parametro page retorna no maximo 100 heroes por solicitação';
    }
    if(errors.length===0){
        next(); 
    }else{ 
        res.status(400).send(msgError);
    }
}


