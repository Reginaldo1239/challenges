const cryptography = require('../util/cryptography');
exports.authUser= async (req,res,next)=>{
    let {token}= req.headers;
    //recupera o id_user e adiciona ao header
    let verificarToken = await cryptography.verificarTokenJwt(token);
        if(verificarToken != false){
            req.headers.id_usuario = verificarToken.id_usuario;
            next();
        }else{
            res.status(401).send({msg:'usuario não tem um token de acesso valido'});
        }
}