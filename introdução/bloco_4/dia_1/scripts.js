// const nome = "Maria Baeta";
//console.log(nome);

//const brithCity = "Belo Horizonte";
//console.log(brithCity);

//let brithYear = 1994;
//brithYear = 2020;
//console.log(brithYear);

//let base = 5;
//let altura = 8;
//let area = base*altura;
//let perimetro = base+base+altura+altura;

//console.log(base)
//console.log(altura)
//console.log(area)
//console.log(perimetro)

//let notaParticipante = 50;
//if (notaParticipante > 80){
 //   console.log('Parabésn, você foi aprovado')
//} else if (notaParticipante > 60) {
  //  console.log('Você está na lista de espera')
//} else if (notaParticipante < 60) {
  //  console.log('Você foi reprovado')
//} else {}

let estadoDaPessoaCandidata = 'abacaxi';

switch (estadoDaPessoaCandidata){
    case'aprovado':
        console.log('Parabéns, vocês esta aprovado');
        break;

    case 'lista':
        console.log('Você está na lista de espera');
        break
    
    case 'reprovado':
        console.log('Você foi reprovado');
        break
    default:
        console.log('não se aplica');
}
