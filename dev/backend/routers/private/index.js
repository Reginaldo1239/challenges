var express = require('express');
var router=express.Router();
const heroController = require('../../controllers/heroes');
const herosControllerMiddlewareValidation = require('../../middleware/controllers-validation/heroes');

router.post('/hero',herosControllerMiddlewareValidation.newHero,heroController.newHero);
router.get('/hero',herosControllerMiddlewareValidation.listHeroes,heroController.listHeroes);
router.put('/hero/:id_hero',herosControllerMiddlewareValidation.updateHero,heroController.updateHero);
router.get('/hero/:id_hero',heroController.getOneHero);
router.delete('/hero/:id_hero',heroController.deleteHero);


module.exports=router; 