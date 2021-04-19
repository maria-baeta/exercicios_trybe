const sum = (a, b) => {
    if (typeof(a) !== 'number' || typeof(b) !== 'number') {
        throw new Error('Parametro precisa ser um número inteiro')
    }
    return a + b;
};
module.exports = sum;