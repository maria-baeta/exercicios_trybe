function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Exercicio 1
  const recuperaIdDays = document.querySelector("#days");
  console.log(recuperaIdDays)
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let index = 0; index< dezDaysList.length; index +=1){
    let saveDay = dezDaysList[index];
    let createElementList = document.createElement("li")
    if (saveDay === 24 | saveDay === 31){
      createElementList.className = "day holiday";
      createElementList.innerHTML = saveDay;
      recuperaIdDays.appendChild(createElementList)
    }  else if (saveDay === 4 | saveDay === 11 | saveDay === 18){
      createElementList.className = "day friday";
      createElementList.innerHTML = saveDay;
      recuperaIdDays.appendChild(createElementList)
    } else if (saveDay === 25){
      createElementList.className = "day holiday friday";
      createElementList.innerHTML = saveDay;
      recuperaIdDays.appendChild(createElementList)
    } else {
      createElementList.className = "day";
    createElementList.innerText = saveDay;
    recuperaIdDays.appendChild(createElementList)
    }
  }

 //Exercicio 2
function createButtonHoliday (string){
let buttonContainer = document.querySelector('.buttons-container')
let newButtonHoliday = document.createElement('button')
newButtonHoliday.innerHTML  = string;
newButtonHoliday.id = 'btn-holiday'
buttonContainer.appendChild(newButtonHoliday);
}
createButtonHoliday('Feriados');