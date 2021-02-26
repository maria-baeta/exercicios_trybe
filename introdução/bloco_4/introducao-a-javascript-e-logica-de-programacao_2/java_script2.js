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