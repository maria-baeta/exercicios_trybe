const strings = require('./string')
jest.mock('./string.js')
//  A terceira deve receber três strings e concatená-las.

describe('Testa funções de Strings', () => {
  // Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa.
  test('Caixa baixa', () => {

    strings.uperCase.mockImplementation((string) => string.toLowerCase());
    expect(strings.uperCase('CASA')).toBe('casa');
    expect(strings.uperCase).toHaveBeenCalled();
    expect(strings.uperCase).toHaveBeenCalledTimes(1);
    expect(strings.uperCase).toHaveBeenCalledWith('CASA');
  })

  test('Ultima letra', () => {
    //Para a segunda função, uma nova implementação deve retornar a última letra de uma string
    strings.firstLetter.mockImplementation(string => string.charAt(string.length - 1));

    expect(strings.firstLetter("letter")).toBe("r");
    expect(strings.firstLetter).toHaveBeenCalled();
    expect(strings.firstLetter).toHaveBeenCalledTimes(1);
    expect(strings.firstLetter).toHaveBeenCalledWith("letter");
  })
  // A terceira deve receber três strings e concatená-las.
  test('3 strings', () => {
    //  A terceira deve receber três strings e concatená-las.
    strings.concatenate.mockImplementation((strA, strB, strC) => strA.concat(strB, strC));
    expect(strings.concatenate("tr", "y", "be")).toBe("trybe");
    expect(strings.concatenate).toHaveBeenCalled();
    expect(strings.concatenate).toHaveBeenCalledTimes(1);
    expect(strings.concatenate).toHaveBeenCalledWith("tr", "y", "be");
  })
  
  test('Caixa Alta', () => {
    strings.uperCase.mockImplementation((string) => string.toUpperCase());
    expect(strings.uperCase('casa')).toBe('CASA');
    expect(strings.uperCase).toHaveBeenCalled();
    expect(strings.uperCase).toHaveBeenCalledTimes(2);
    expect(strings.uperCase).toHaveBeenCalledWith('casa');
  })
})

// 5.Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

