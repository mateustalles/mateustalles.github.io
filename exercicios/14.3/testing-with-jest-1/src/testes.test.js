const calcs = require('./calcs')
const array = require('./array')

describe('Suite de testes', () => {

    test('soma 1 e 2 para dar 3', () => {
    expect(calcs.sum(1, 2)).toEqual(3)
    })

    test('divide 10 por 3 para dar 3.33...', () => {
        expect(calcs.division(10, 3)).toBeCloseTo(3.33)
    })

    test('retorna apenas os items pares do array', () => {
        const array1 = [0,1,2,3,4,5,6,7,8,9,10];
        const array2 = [0,2,4,6,8,10];
        expect(array.retornePares(array1)).toEqual(array2);
    })

    test('contem item4', () => {
        let array3 = ['item1','item2','item3'];
        expect(array.addItem(array3)).toContain('item4');
    })
});
