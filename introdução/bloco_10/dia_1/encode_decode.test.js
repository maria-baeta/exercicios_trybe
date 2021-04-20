const { encode, decode } = require('./encode_decode');
// const decode = require('./encode_decode');

describe('Teste encode', () => {
    test('Testar se Encode é uma função', () => {
        expect('function').toBe(typeof (encode));
    });
    test("Se a vogal é convertida no numero 1", () => {
        expect(encode('ana')).toBe('1n1');
    })
    test("Se e vogal é convertida no numero 2", () => {
        expect(encode('ele')).toBe('2l2');
    })
    test("Se i vogal é convertida no numero 3", () => {
        expect(encode('xixi')).toBe('x3x3');
    })
    test("Se o vogal é convertida no numero 4", () => {
        expect(encode('ovo')).toBe('4v4');
    })
    test("Se u vogal é convertida no numero 5", () => {
        expect(encode('nu')).toBe('n5');
    })
    test("Testa se a string retornada tem o mesmo tamanho da inicial ", () => {
        expect(encode('maria').length).toBe(5);
    })
    
});


describe('Teste decode', () => {
    test('Testar se Decode é uma função', () => {
        expect('function').toBe(typeof (decode));
    });
    test("Se 1  é convertida na vogal a", () => {
        expect(decode('1n1')).toBe('ana');
    })
    test("Se 2  é convertida na vogal e", () => {
        expect(decode('2l2')).toBe('ele');
    })
    test("Se 3  é convertida na vogal i", () => {
        expect(decode('x3x3')).toBe('xixi');
    })
    test("Se 4  é convertida na vogal o", () => {
        expect(decode('4v4')).toBe('ovo');
    })
    test("Se 5  é convertida na vogal u", () => {
        expect(decode('n5')).toBe('nu');
    })
    test("Testa se a string retornada tem o mesmo tamanho da inicial ", () => {
        expect(decode('maria').length).toBe(5);
    })
    
});
