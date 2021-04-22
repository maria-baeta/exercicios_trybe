const uppercase = require('./uppercase')
test('Testa se a função uppercase transforma as letras de uma palavra em letras maiúsculas', (done) => {
   uppercase('test', (result) => {
       expect(result).toBe('TEST')
       done();
   });
})

const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalByName = (name) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const animal = Animals.find((animal) => animal.name === name);
        if (animal) {
          return resolve(animal);
        };
        const messageError = 'Nenhum animal com esse nome!';
        return reject(messageError);
      }, 100);
    })
  );
  
  const getAnimal = (name) => {
    return findAnimalByName(name)
      .then(animal => animal);
  };
  