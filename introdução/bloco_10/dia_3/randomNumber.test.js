const execise_1 = require('./randomNumber')

// Por ser um unico teste usar o jest.fn()
test('Gera numero aleatorio', () => {
    execise_1.randomNumber = jest
        .fn()
        .mockReturnValue(10);
    execise_1.randomNumber();

    expect(execise_1.randomNumber).toHaveBeenCalled();
    expect(execise_1.randomNumber).toHaveBeenCalledTimes(1);
    expect(execise_1.randomNumber()).toBe(10)
})

// 2.Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

test('Divisão', () => {
    execise_1.randomNumber = jest
        .fn()
        .mockImplementationOnce((a, b) => a / b);

    expect(execise_1.randomNumber(9, 3)).toBe(3);
    expect(execise_1.randomNumber).toHaveBeenCalled();
    expect(execise_1.randomNumber).toHaveBeenCalledTimes(1);
    expect(execise_1.randomNumber).toHaveBeenCalledWith(9, 3);
})

// 3.Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.
test('Multiplicação', () => {

    // execise_1.randomNumber.mockReset();

    execise_1.randomNumber = jest
        .fn()
        .mockImplementationOnce((a, b, c) => a * b * c);

    expect(execise_1.randomNumber(3, 5, 8)).toBe(120);
    expect(execise_1.randomNumber).toHaveBeenCalled();
    expect(execise_1.randomNumber).toHaveBeenCalledTimes(1);
    expect(execise_1.randomNumber).toHaveBeenCalledWith(3, 5, 8);
})

test('Dobro', () => {
    execise_1.randomNumber.mockReset();

    execise_1.randomNumber = jest
        .fn()
        .mockImplementationOnce((a) => a * 2);
    expect(execise_1.randomNumber(4)).toBe(8);
    expect(execise_1.randomNumber).toHaveBeenCalled();
    expect(execise_1.randomNumber).toHaveBeenCalledTimes(1);
    expect(execise_1.randomNumber).toHaveBeenCalledWith(4);
});