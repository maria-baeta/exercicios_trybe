// 2. Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const getRandom = (num) => {
     console.log('O número apostado é:' + ' ' + num)
    // console.log('O número sorteado é:'+ ' ' + numberRandom)
    // if (num === numberRandom) {
    //     console.log('Parabésn você ganhou')
    // } else{
    //     console.log('Tente de novo')
    // }
}
getRandom(2)

const hoFgetRandom = () => {
    const numberRandom = Math.floor(Math.random() * (6 - 1) + 1);
    console.log('O número sorteado é:'+ ' ' + numberRandom);
    if (getRandom === numberRandom) {
        console.log('Parabésn você ganhou')
    } else{
        console.log('Tente de novo')
    }
}
hoFgetRandom()


