//exercise.js
//Utilizando o array abaixo, percorra-o (for) somando todos os valores (varivel). Caso o valor final seja maior que 15, imprima-o (if). Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":(else)

/*let fruits = [3, 4, 10, 1, 12];
let totaldaSoma = 0;

for(let i = 0; i > fruits.length;i++){
    totaldaSoma += fruits[1]
}

if (totaldaSoma > 15){
    console.log(totaldaSoma)
} else {
    console.log('Valor menor que 16')
}*/

const n = 9;
let resultado = 100;
for (let i = 0; i <= n; i+=1){
    resultado -=i;
}
console.log(resultado)
