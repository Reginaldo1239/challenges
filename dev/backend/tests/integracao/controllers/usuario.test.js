const superTest = require('../../util/supertest');
describe('testa parte de login em caso de sucesso',()=>{ 
test('login em caso de sucesso status 200',async ()=>{
    let endPoint = '/public/login';
    let body ={
        nome:'reginaldo',
        senha:'123456'
    }
    let resultPost= await superTest.postPublic({endPoint,body});
    let {text,status} = resultPost;
    expect(status).toEqual(200);
    expect(text).toEqual(expect.objectContaining({
        token:expect.any(String),
        id_usuario:expect.any(Number),
        nome:expect.any(String) 
    }));
}) 
});

describe('testa erros de login',()=>{
    test('se nome estiver errado se retorna 404', async()=>{
        let endPoint = '/public/login';
        let body ={
            nome:'error',
            senha:'123456'
        }
        let resultPost= await superTest.postPublic({endPoint,body});
        let {text,status} = resultPost;
        expect(status).toEqual(404);
        expect(text).toEqual(expect.objectContaining({
            msg:'nome ou senha invalida',
        }));
    })
    test('se senha estiver errado se retorna 404', async()=>{
        let endPoint = '/public/login';
        let body ={
            nome:'reginaldo',
            senha:'error'
        }
        let resultPost= await superTest.postPublic({endPoint,body});
        let {text,status} = resultPost;
        expect(status).toEqual(404);
        expect(text).toEqual(expect.objectContaining({
            msg:'nome ou senha invalida',
        }));
    })
    test('se não enviar o parametro nome do usuario  status 400', async()=>{
        let endPoint = '/public/login';
        let body ={
            senha:'error'
        }
        let resultPost= await superTest.postPublic({endPoint,body});
        let {text,status} = resultPost;
        expect(status).toEqual(400);
        expect(text).toEqual(expect.objectContaining({
            msg:'o parametro nome é obrigatorio',
        })); 
    })
    test('se não enviar o parametro senha do usuario  status 400', async()=>{
        let endPoint = '/public/login';
        let body ={
            nome:'reginaldo',
        }
        let resultPost= await superTest.postPublic({endPoint,body});
        let {text,status} = resultPost;
        expect(status).toEqual(400);
        expect(text).toEqual(expect.objectContaining({
            msg:'o parametro senha é obrigatorio',
        })); 
    })
})