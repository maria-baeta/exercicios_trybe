const hydrate = (string) => {
const caracters = string.split('')
const number = [];
 caracters.forEach((caracter, index) => {
    const num =  parseInt(caracter);
    if (isNaN(num) === false){
        number.push(num)
    }
 })
 const sum =  number.reduce(((acumulador, valoratual) => acumulador + valoratual), 0);
 if( sum === 1) {
     return`${sum} copo de água`
 }
return `${sum} copos de água`
}
console.log(hydrate('4 caipirinhas e 2 cervejas'))
module.exports = hydrate;