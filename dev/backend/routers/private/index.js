var express = require('express');
var router=express.Router();
const heroController = require('../../controllers/heroes');

router.post('/hero',heroController.newHero);

module.exports=router; 