let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
console.log(numbers)

//2.Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;
for (let index = 0; index < numbers.length; index++) {
    total += numbers[index];
}
console.log(total)

//3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let totalSoma = 0;
for (let index = 0; index < numbers.length; index++) {
    totalSoma += numbers[index];
}
let mediaArit = totalSoma / numbers.length
console.log(mediaArit)

//4.Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (mediaArit > 20) {
    console.log('Valor maior que 20')
} else { console.log('Valor menor ou igual a 20')}

//5.Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;
for (let index = 0; index < numbers.length; index++){
    if(numbers[index] > maiorNumero) {
        maiorNumero = numbers[index]
    }
}
console.log(maiorNumero)

//6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares = 0;
for(let index = 0; index < numbers.length; index++) {
    if(numbers[1] % 2 !== 0) {
        numerosImpares += 1;
    }
}
if (numerosImpares === 0) {
    console.log('Nenhum valor é impar encotrado')
} else {
    console.log(numerosImpares)
}

//7.Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = 1000;
for (let index = 0; index < numbers.length; index++){
    if(numbers[index] < menorNumero) {
        menorNumero = numbers[index]
    }
}
console.log(menorNumero)

//8. Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;
let numeros = [];
for (let index = 1; index <= 25; index +=1){
    numeros.push(index);
}
console.log(numeros);

//9.Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 

for (let index = 0; index < numeros.length; index++){
    console.log(numeros[index]/2);
}

