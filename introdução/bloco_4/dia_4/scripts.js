let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
}
//Adiaciona Key/Value
player.medals = { golden: 2, silver: 3 };
player.bestInTheWorld = { date: [2006, 2007, 2008, 2009, 2010, 2018] };
// console.log(player);
// console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`);
// console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player.bestInTheWorld.date.length} vezes`);
// console.log(`"A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata".`);

//-----------------------------------------------
let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}
// FOR/OF funciona pois é sobre um array []
// for(let car of cars) {
//   console.log(car)
// }

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
}

for (let index in names) {
  console.log(`Olá ${names[index]}`)
}
// FOR/Of não funciona pois é sobre um Object {}
// for(let name of names){
//   console.log(`Olá ${name}`)
// }

let carro = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
}
//Não impre as chaves (Keys)
for(let index in carro) {
  console.log(carro[index])
}
// Impre Chave/Valor
for(let index in carro) {
  console.log(index,carro[index])
}

// let n = [5, 10, 15]
// for (let key in n) {
//   console.log(key)
// };

// let n = [5, 10, 15]
// for (let key in n) {
//   console.log(n)
// };


// let n = [5, 10, 15]
// for (let key in n) {
//   console.log(n[key])
// };
