const validacao  = require('../../../util/validacao');

    test ('function minLength() testa no caso de retornar true ou false',()=>{
        // o segundo passa o tamanho minimo que o primeiro parametro deve ter
        expect(validacao.minLength('aaa',3) ).toEqual(true);
        expect(validacao.minLength('aa',5) ).toEqual(false);
    })

    test('function maxLength() testa no caso de retornar true ou false ' ,()=>{
          // o segundo passa o tamanho maximo que o primeiro parametro deve ter
        expect(validacao.maxLength('aaaaa',4)).toEqual(false);
        expect(validacao.maxLength('aa',4)).toEqual(true);
    })

    test('function isNumber testa no caso de retorn true ou false',()=>{
        expect(validacao.isNumber(12345)).toEqual(true);
        expect(validacao.isNumber('aaaaqa')).toEqual(false);
    })

    test ('function classeHero() testa todas as situações que deve retornar true', ()=>{
        expect(validacao.classeHero('S')).toEqual(true);
        expect(validacao.classeHero('A')).toEqual(true);
        expect(validacao.classeHero('B')).toEqual(true);
        expect(validacao.classeHero('C')).toEqual(true);
        expect(validacao.classeHero('T')).toEqual(false);
    })

    