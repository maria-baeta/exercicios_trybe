const execise_1 = require('./exercise_1')

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