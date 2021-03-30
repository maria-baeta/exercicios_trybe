// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
// Para os próximos exercícios copie o código abaixo.
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1. Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const danoDragons = (typeDragon) => {
  const danoMinimo = 15;
  const danoMaximo = typeDragon.strength;
  const dragonDano = Math.floor(Math.random() * (danoMaximo - danoMinimo) + danoMinimo);
  return dragonDano;
}
// console.log(danoDragons(warrior));

const danoDragon = () => {
  dragon.damage = danoDragons(dragon)
}
danoDragon();
console.log(dragon)

// 2. Crie uma função que reotorna o dano causado pelo warrior 
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const danoDragonsWarrior = (typeDragon) => {
  const danoMinimo = warrior.strength;
  const danoMaximo = warrior.strength * warrior.weaponDmg;
  const warriorDano = Math.floor(Math.random() * (danoMaximo - danoMinimo) + danoMinimo);
  return warriorDano;
}
const danoWarrior = () => {
  warrior.damage = danoDragonsWarrior(warrior)
}
danoWarrior(warrior);
console.log(warrior);

// 3. Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const attack = (mage) => {
  const manaGasta = mage.mana;
  const danoMinimo = mage.intelligence;
  const danoMaximo = danoMinimo * 2;
  const turno = {
    manaGasto: 0,
    danoCausado: 'Não possui mana suficiente',
  };
if (manaGasta > 15) { 
  const dano = Math.floor(Math.random() * (danoMinimo - danoMaximo) + danoMinimo);
  turno.manaGasto = 15;
  turno.danoCausado = dano;
  return turno
}
}
console.log(attack(mage));

//PARTE 2 
// 1. Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .

const gameActions = {
  // Crie as HOFs neste objeto.
  turnoAttack: () => {

  },
  turnoAttack()
};