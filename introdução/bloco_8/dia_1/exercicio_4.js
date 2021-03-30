// 4.Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem checadas (Respostas da pessoa estudante) e o terceiro é uma função que checa se a resposta está correta e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// *Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
const checkResposta = (gabarito, respostasAluno) => {
  let contador = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    if (gabarito[index] === respostasAluno[index]) {
      contador += 1;
    } else if (respostasAluno[index] === 'N.A') {
      contador += 0
    } else {
      contador -= 0.5;
    }
  }
  console.log('Sua nota é:' + ' ' + contador)
}


checkResposta(["a", 'b'], ["a", 'c'])

// const hof = ([gabarito], [respostasAluno], checkResposta) => {

// // };