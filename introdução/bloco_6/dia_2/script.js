function createOption() {
// Criar um objeto com todos os estados brasileiros
  const statesBR = ['Acre', 'Alagoas', 'Amapá','Amazonas', 'Bahia', 'Ceará','Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso',  'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  const siglaStatsBr = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']

  for (let index = 0; index < statesBR.length && index < siglaStatsBr.length; index += 1) {
    let stateBr = statesBR[index];
    let siglaState = siglaStatsBr[index];
    const state = document.querySelector('#state');
    const createOption = document.createElement('option');
    createOption.innerHTML = stateBr;
    state.appendChild(createOption);
    state.appendChild(createOption).value = siglaState;
  }
}
createOption();
document.querySelector('#submit').addEventListener('click', function(event) {
  event.preventDefault
  const inputs = document.querySelectorAll('.inputs');
  const textArea = document.querySelector('#curriculum-vitae').value;
  const select = document.querySelectorAll('option')
  for (let index = 0; index < inputs.length; index += 1) {
    let returnInput = inputs[index].value;
    const div = document.createElement('div');
    if((inputs[index].type === 'radio') && (inputs[index].checked)) {
      div.innerHTML =(inputs[index].value);
    } else if (inputs[index].type !== 'radio') {
      div.innerHTML =(inputs[index].value);
    }
    const button = document.querySelector('#submit');
    div.innerHTML = (returnInput); 
    button.appendChild(div);
  }
});
// Criar uma funçao que limpe todos os campos preenchidos e a div
document.querySelector('#clean').addEventListener('click', function(event) {
  const inputs = document.querySelectorAll('.inputs');
  const textArea = document.querySelector('#curriculum-vitae');
  const div = document.querySelectorAll('div')
  for (let index = 0; index < inputs.length && index < div.length; index += 1){
    const valueInput = inputs[index];
    valueInput.value = '';
    textArea.value = '';
    div[index].innerText = '';
  }
});


