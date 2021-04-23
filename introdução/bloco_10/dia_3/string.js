// 4.Dentro de um mesmo arquivo, crie três funções:

// A primeira deve receber uma string e retorná-la em caixa alta
const uperCase = (string) => {
   string.toUpperCase();
}
// uperCase('casa')

// A segunda deve também receber uma string e retornar só a primeira letra
const firstLetter = (string) => {
   string[0];
}
// firstLetter('casa')

// A terceira deve receber duas strings e concatená-las
const concatenate = (stringA, stringB) => {
   stringA.concat(stringB);
}
// concatenate('casa', 'branca')

// 5.Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

module.exports = { uperCase, firstLetter, concatenate };