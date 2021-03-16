function createOption() {
// Criar um objeto com todos os estados brasileiros
  const statesBR = ['Acre', 'Alagoas', 'Amapá','Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso',  'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];
  for (let index = 0; index < statesBR.length; index += 1) {
    let stateBr = statesBR[index]
    let valueState = statesBR[index].valueOf()
    const state = document.querySelector('#state');
    const createOption = document.createElement('option');
    createOption.innerHTML = stateBr;
    
    state.appendChild(createOption);
  }
}
createOption()
