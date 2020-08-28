const heroesModel =require('../../../models/heroes');
let newHero;
const ID_USUARIO=1;

//cria novo heroi para ser usado nos tests  "model function newHero" , "model fuction deleteHero ()" 
beforeAll(async()=>{
   let values={
      id_usuario:ID_USUARIO,
      nome:'ete',
      classe:'A',
      lat:-23.5635787,
      lng:-46.6916068,
     }
     newHero = await heroesModel.newHero(values);  
});


test('model function newHero ',async()=>{
   let values={
    id_usuario:ID_USUARIO,
    nome:'ete',
    classe:'A',
    lat:-23.5635787,
    lng:-46.6916068,
   }
//  let resultInsertNewHero = await heroesModel.newHero(values);  
   expect(newHero).toEqual(expect.objectContaining(
      {
         affectedRows:1,
         insertId:expect.any(Number)
      }));
})  

test('model fuction getOneHero',async()=>{
   let getOneHero = await heroesModel.getOneHero({id_usuario:1,id_hero:446});
 //  h.id_hero,h.id_usuario,h.nome,h.classse,h.lat,h.lng  
   expect(getOneHero[0]).toEqual(expect.objectContaining(
      {
         id_hero:expect.any(Number),
         id_usuario:expect.any(Number),
         nome:expect.any(String),
         classe:expect.any(String), 
         lat:expect.any(Number),
         lng:expect.any(Number)
      }
      ));
})

test('modal function updateHero()',async()=>{
   let values = {
      id_usuario:ID_USUARIO,
      id_hero:50, 
      nome:'newName'+Date.now(),
      class:'A',
      lng:-23.56357870,
      lng:-46.69160680 
   }
   let resultUpdateHero = await heroesModel.updateHero(values);

  expect(resultUpdateHero).toEqual(expect.objectContaining({
   affectedRows:1
  }))
})

test('moda function listHeroes()',async()=>{
   let values={
      id_usuario:ID_USUARIO,
      page:0,
      limit:50,
   }
   let listHeroes =await heroesModel.listHeroes(values); 
   listHeroes.map(hero=>{
    
      expect(hero).toEqual(expect.objectContaining(
         {
               id_hero:expect.any(Number),
               id_usuario:expect.any(Number),
               nome:expect.any(String),
               classe:expect.any(String),
               lat:expect.any(Number),
               lng:expect.any(Number)    
         }
         
      )) 

   })
}) 

   
test('model fuction deleteHero ()',async()=>{
   
   let deleteHero = await heroesModel.deleteHero({id_usuario:1,id_hero:newHero.insertId});
   expect(deleteHero).toEqual(expect.objectContaining({affectedRows:1}))
})