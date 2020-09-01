var express = require('express');
var router=express.Router();

const heroController = require('../../controllers/heroes');
const batalhasController = require('../../controllers/batalhas');
const usuarioController = require('../../controllers/usuario');
const herosControllerMiddlewareValidation = require('../../middleware/controllers-validation/heroes');
const batalhasControllerMiddlewareValidation = require('../../middleware/controllers-validation/batalhas');

router.post('/hero',herosControllerMiddlewareValidation.newHero,heroController.newHero);
router.get('/hero',herosControllerMiddlewareValidation.listHeroes,heroController.listHeroes);
router.put('/hero/:id_hero',herosControllerMiddlewareValidation.updateHero,heroController.updateHero);
router.get('/hero/:id_hero',heroController.getOneHero);
router.delete('/hero/:id_hero',heroController.deleteHero);

router.get('/batalhas',batalhasControllerMiddlewareValidation.batalhas,batalhasController.listarBatalhas);
router.get('/auth',usuarioController.auth)
 
 
module.exports=router;  