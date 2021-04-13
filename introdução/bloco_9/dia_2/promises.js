// Para criar a Promise, utilizamos o construtor Promise junto com o operador new . Um construtor nada mais é do que uma função especial que cria um objeto a partir de uma classe.
// O construtor recebe uma função com 2 parâmetros: resolve e reject . Mantenha a calma que já vamos ver a importância desses dois. Um ponto a se notar aqui é que usamos uma arrow function para passar a função como parâmetro pro construtor, mas você pode utilizar qualquer construção, desde que seja uma função com 2 parâmetros

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);
  if (number <= 5) {
    // Uma coisa que você irá reparar é que quando o programa é bem sucedido, seu output aparece normalmente. Já quando ele é mal sucedido, ele lança um error ! Essa é a principal diferença entre o resolve e o reject , exatamente o que queríamos demonstrar. Na próxima sessão vamos ver como tratar este erro.
    // Repare também como usamos o return antes do reject para interromper a execução da função. Dessa forma o uso do else se torna desnecessário.  
    return reject(number);
  }
  resolve(number);
})

// Passamos como argumento uma função. Essa função também recebe 1 argumento que é o retorno do resolve da nossa promise.
// O .then() é usado "em cadeia", um conceito chamado de chaining . Assim, podemos colocar vários .then() em cadeia, e o argumento da função interna de um será o retorno do anterior. A parte mais importante é que o .then() espera a promise (ou o .then() anterior) ser concluída para começar a sua execução. Assim, nosso fluxo está controlado!
.then(number => `Que sucesso =). Nosso número foi ${number}`)
.then(msg => console.log(msg))

// o .catch() recebe o retorno do reject , que é passado para ele como argumento de sua função interna. Assim, quando a promise retorna um reject , pula todos os .then() e executa o primeiro .catch() que encontrar. E tem mais! O .catch() também "pega" qualquer erro que acontecer dentro de qualquer .then() anterior a ele. Por esse motivo é geralmente usado no final.

.catch(number => console.log(`Que fracasso =(. Nosso número foi ${number}`));