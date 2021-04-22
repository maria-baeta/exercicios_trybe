const uppercase = require('./uppercase')
test('Testa se a função uppercase transforma as letras de uma palavra em letras maiúsculas', (done) => {
   uppercase('test', (result) => {
       expect(result).toBe('TEST')
       done();
   });
})

  
  