var express = require('express');
var router=express.Router();
const usuario = require('../../controllers/usuario');

router.post('/login',usuario.login);

module.exports=router;  