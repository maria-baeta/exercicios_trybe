document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'green';
  document.querySelector('#elementoOndeVoceEsta').firstChild.innerHtml = 'Olá';
  document.querySelector('#pai').firstChild;
  document.querySelector('#elementoOndeVoceEsta').previousElementSibling
  document.querySelector('#elementoOndeVoceEsta').nextSibling
  document.querySelector('#elementoOndeVoceEsta').nextElementSibling
  document.querySelector('#pai').childNodes[5]

  let criaUmIrmao = [];
  let recuperaOId1 = document.querySelector('#pai')
  for(let index = 0; index < criaUmIrmao.length; index += 1){
    let guardarOConteudoda1Var = criaUmIrmao[index];
    let criaUmElementoHtml = document.createElement('div');
    criaUmElementoHtml.innerHTML = guardarOConteudoda1Var;
    recuperaOId1.appendChild(criaUmElementoHtml);
  }