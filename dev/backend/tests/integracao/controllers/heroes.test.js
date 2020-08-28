
const express = require('express');
const faker = require('faker');
const superTest = require('../../util/supertest');

const app = express();



describe('POST /hero,em caso de sucesso 201',()=>{
  test('201 heroi criado', async function() {
    let body={
      nome:faker.name.findName(),
      classe:'A',
      cidade:'Sao paulo',
      bairro:'Pinheiros',
      pais:'brasil'
  }   
      let resultInsert= await superTest.post({body,endPoint:'/hero'});
      let  {status,text}  = resultInsert;
      expect(status).toEqual(201);
      expect(text).toEqual(expect.objectContaining(
        {
          affectedRows:1,
          insertId:expect.any(Number)
        }))
    
  });
})

describe('POST /hero, novo heroi testa varias situações de erros', function() {

test('faltando o paramentro nome é esperado erro 400',async ()=>{
  let body={
    classe:'A',
    cidade:'Sao paulo',
    bairro:'Pinheiros',
    pais:'brasil'
  }
  let resultInsert = await superTest.post({body,endPoint:'/hero'});
  let{status,text} = resultInsert;
  expect(status).toEqual(400);
  expect(text).toEqual(expect.objectContaining( 
    {
        msg:'o parametro nome é obrigatorio'
    }))
});

test('faltando o paramentro classe, é esperado erro 400',async ()=>{
  let body={
    nome:faker.name.findName(),
    cidade:'Sao paulo',
    bairro:'Pinheiros',
    pais:'brasil'
  }
  let resultInsert = await superTest.post({body,endPoint:'/hero'});
  let{status,text} = resultInsert;
  expect(status).toEqual(400);
  expect(text).toEqual(expect.objectContaining( 
    {
        msg:'o parametro classe é obrigatorio'
    }))
});

test('faltando o paramentro cidade, é esperado erro 400',async ()=>{
  let body={
    nome:faker.name.findName(),
    classe:'A',
    bairro:'Pinheiros',
    pais:'brasil'
  }
  let resultInsert = await superTest.post({body,endPoint:'/hero'});
  let{status,text} = resultInsert;
  expect(status).toEqual(400);
  expect(text).toEqual(expect.objectContaining( 
    {
        msg:'o parametro cidade é obrigatorio'
    }))
});

test('faltando o paramentro bairro, é esperado erro 400',async ()=>{
  let body={
    nome:faker.name.findName(),
    classe:'A',
    cidade:'Sao paulo',
    pais:'brasil'
  }
  let resultInsert = await superTest.post({body,endPoint:'/hero'});
  let{status,text} = resultInsert;
  expect(status).toEqual(400);
  expect(text).toEqual(expect.objectContaining( 
    {
        msg:'o parametro bairro é obrigatorio'
    }))
});


 test('faltando o paramentro pais é esperado erro 400',async ()=>{
        let body={
          nome:faker.name.findName(),
          classe:'A',
          cidade:'Sao paulo',
          bairro:'Pinheiros',
      }
      let resultInsert = await superTest.post({body,endPoint:'/hero'});
      let{status,text} = resultInsert;
      expect(status).toEqual(400);
      expect(text).toEqual(expect.objectContaining( 
        {
            msg:'o parametro pais é obrigatorio'
        }))
      }); 
  });

  describe('GET /hero:id_hero testa retorno um unico heroi',()=>{
    let id_hero =40;
    const endPoint = `/hero/${id_hero}`;
    test ('retorna info do id do heroi 200',async()=>{
      let resultGetHero = await superTest.get({endPoint});
      let {status,text} = resultGetHero;

      expect(status).toEqual(200);
      expect(text[0]).toEqual(expect.objectContaining({
        id_hero:expect.any(Number),
        id_usuario:expect.any(Number)
      })) 
    });
    test('retorna msg nao encontrado quando não existir id_hero 404',async ()=>{
      let id_hero=0;
      let endPoint = `/hero/${id_hero}`;
      let resultGetHero = await superTest.get({endPoint});
      let {status,text} = resultGetHero;
      expect(status).toEqual(404);
      expect(text).toEqual(expect.objectContaining({
        msg:'não encontrado'
      }));
    });

  })


  describe('GET /hero lista herois 200',()=>{
    test('lista herois do usuario 200',async()=>{
      let page =0;
      let limit=50;
      let endPoint = `/hero?page=${page}&limit=${limit}`;
      let listHeroes = await superTest.get({endPoint});
      let {status,text}= listHeroes;
      expect(status).toBe(200);
      text.map((hero)=>{
        expect(hero).toEqual(expect.objectContaining({
          id_hero:expect.any(Number),
          id_usuario:expect.any(Number),
          nome:expect.any(String),
          classe:expect.any(String),
          lat:expect.any(Number),
          lng:expect.any(Number)
        }))
      })
    })
  })
  describe('GET /hero lista herois testa  possiveis erros  400',()=>{
    let page =0;
    let limit=50;
    test('erro no caso de não passar o parametro limit', async()=>{
      let page =0;
      let endPoint = `/hero?page=${page}`;
      let listHeroes = await superTest.get({endPoint});
      let {status,text}= listHeroes;
      console.log(text)
      expect(status).toBe(400);
      expect(text).toEqual(expect.objectContaining({
        msg:'parametro limit é obrigatorio'
      }))
    });
 
    test('erro no caso do parametro com limit maior que 100,  400', async()=>{
      limit=120; 
     let endPoint = `/hero?page=${page}&limit=${'A'}`;
     let listHeroes = await superTest.get({endPoint});
     let {status,text}= listHeroes;
     expect(status).toBe(400); 
     expect(text).toEqual(expect.objectContaining({
       msg:'o parametro limit aceita apenas numeros'
     }))
   }) 

    test('erro no caso do parametro com limit maior que 100,  400', async()=>{
    
      let endPoint = `/hero?page=${page}&limit=${limit}`;
      let listHeroes = await superTest.get({endPoint});
      let {status,text}= listHeroes;
      expect(status).toBe(400); 
      expect(text).toEqual(expect.objectContaining({
        msg:'parametro page retorna no maximo 100 heroes por solicitação'
      }))
    }) 

    test('erro no caso da falta do paramentro page', async()=>{
      limit =100
     let endPoint = `/hero?limit=${limit}`;
     let listHeroes = await superTest.get({endPoint});
      let   {status,text} =listHeroes;
     expect(status).toBe(400);  
     expect(text).toEqual(expect.objectContaining({
       msg:'parametro limit é obrigatorio'
     }))
   }) 
   
   test('erro no caso o parametro page ter um valor diferente de um numero', async()=>{
    page ='A'
   let endPoint = `/hero?limit=${limit}&page=${page}`;
   let listHeroes = await superTest.get({endPoint});
   let {status,text}= listHeroes;

   expect(status).toBe(400);  
   expect(text).toEqual(expect.objectContaining({
     msg:'o parametro page aceita apenas numeros'
   }))
 }) 
  })

  describe('put hero/id_hero sucesso 200', async()=>{
    
      test(' heroi atualizado com sucesso status 200 affectedRows 1',async()=>{
        let body = {
          nome:faker.name.firstName(),
          classe:"C",
          cidade:"Juàzeiro",
          bairro:"Santo Antonio",
          pais:"brasil"
        }
        let id_hero =50
        let endPoint = `/hero/${id_hero}`
       let resultUpdateHero = await superTest.put({endPoint,body});
       let {text,status} = resultUpdateHero;

       expect(status).toEqual(200)
       expect(text).toEqual(expect.objectContaining({
        affectedRows:1,
       }))
      })
  })