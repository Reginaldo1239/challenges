const geoCoding = require('../../../servicos/geoCoding');

    test('function geoCoding.getLatitudeELongiture() verifica se retorna lat e lng', async ()=>{
        let endereco={
            cidade :'sao paulo',
            bairro:'pinheiros',
            pais:'brasil',
        }
        let latElng = await geoCoding.getLatitudeELongiture(endereco);
        expect(latElng).toEqual(expect.objectContaining({
            lat:expect.any(Number),
            lng:expect.any(Number),
        }))
    })