let player = { 
  primeirNome: "Marta",
  lastName: "Silva" ,
  age: 34 ,
  medals: {golden: 2, silver: 3},
  bestInTheWorld: {
    date: [2006, 2007, 2008, 2009, 2010, 2018]
  },

};
console.log('A jogadora' + " " + player.primeirNome + " " + player.lastName + " " + "tem" + " " + player.age + " " + "anos de idade");
console.log('A jogadora' + " " + player.primeirNome + " " + player.lastName + " " + " foi eleita a melhor do mundo por 6 vezes. Nos anos de:" + " " + player.bestInTheWorld.date)
console.log('A jogadora possui' + ' ' + player.medals.golden + ' ' + 'medalhas de ouro e' +' ' + player.medals.silver + ' ' + 'medalhas de prata')

//A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

let n = [5, 10, 15]
for (let key in n) {
  console.log(key)
};

let n = [5, 10, 15]
for (let key in n) {
  console.log(n)
};


let n = [5, 10, 15]
for (let key in n) {
  console.log(n[key])
};
