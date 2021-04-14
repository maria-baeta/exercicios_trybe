// const { link } = require("node:fs");
const appendJoke = (jokes) => {
  let h2 = document.querySelector('#jokeContainer')
  h2.innerHTML = `${jokes.joke}`
}

const API_URL = 'https://icanhazdadjoke.com/';
const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  // Agora vamos tentar fazer as requisições a API usando fetch . Essa função recebe dois parâmetros:
  // 1. O endereço para o qual a requisição será feita, ou seja, a url do serviço.
  // 2. Um objeto contendo as especificações da requisição. Para essa API , atribuiremos a esse objeto as chaves method e headers
  //      1         2
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      appendJoke(data)
    })
}


// window.onload = () => ferchJoke();
window.onload = () => fetchJoke();