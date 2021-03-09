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
function createButtonHoliday (string) {
let buttonContainer = document.querySelector('.buttons-container');
let newButtonHoliday = document.createElement('button');
newButtonHoliday.innerHTML  = string;
newButtonHoliday.id = 'btn-holiday'
buttonContainer.appendChild(newButtonHoliday);
}
createButtonHoliday('Feriados');

//Exercicio 3
function styleDayHoliday() {
  let buttonHoliday = document.querySelector('#btn-holiday');
  let dayHoliday = document.querySelectorAll('.holiday')
  let bgColor = 'rgb(238,238,238)';
  let newBgColor = 'white';

  buttonHoliday.addEventListener('click', function() {
    for (let index = 0; index < dayHoliday.length; index += 1) {
      if (dayHoliday[index].style.backgroundColor === newBgColor) {
        dayHoliday[index].style.backgroundColor = bgColor;
      } else {
        dayHoliday[index].style.backgroundColor = newBgColor;
      }
    }
  })
};
styleDayHoliday();

//Exercicio 4
function createButtonFriday (string) {
let buttonContainer = document.querySelector('.buttons-container');
let newButtonFriday = document.createElement('button');
newButtonFriday.innerHTML = string;
newButtonFriday.id = 'btn-friday';
buttonContainer.appendChild(newButtonFriday);
}
createButtonFriday('Sexta-feira');

//Exercicio 5 
function styleDayFriday() {
  let buttonFriday = document.querySelector("#btn-friday");
  let dayFriday = document.querySelectorAll('.friday')
  let bgColor = 'rgb(238,238,238)';
  let newBgColor = 'white';
  
  buttonFriday.addEventListener('click', function() {
    for (index = 0; index < dayFriday.length; index += 1) {
      if (dayFriday[index].style.backgroundColor === newBgColor) {
        dayFriday[index].style.backgroundColor = bgColor;
      } else {
        dayFriday[index].style.backgroundColor = newBgColor;
      }
    }
  })
}
styleDayFriday()

//Exercicio 6
function dayMouseOver () {
  let days = document.querySelector("#days")

}

//Exercicio 7 
function tasks (string) {
  let recuperaClassTasks = document.querySelector('.my-tasks');
  let createSpan = document.createElement('span');
  createSpan.innerText = string;
  recuperaClassTasks.appendChild(createSpan);
}
tasks('cozinhar')

// Exercicio 8
function cores (string) {
  let recuperaClassTasks = document.querySelector('.my-tasks');
  let createDivColor = document.createElement('div');
  createDivColor.className = 'task'
  createDivColor.style.backgroundColor = string
  recuperaClassTasks.appendChild(createDivColor)
}
cores('green')

// Exercicio 9
function styleTask () {
  let recuperaClassTask = document.querySelector('.task');
  recuperaClassTask.addEventListener("click", function(){
    if (recuperaClassTask.className === "task"){
      recuperaClassTask.className = "task selected";
    }
    else {
      recuperaClassTask.className = "task";
    }
  })
}
styleTask()

//Exercicio 10
function addColorDay (){
  let recuperecolor =document.querySelector('.my-tasks div');
  let recupereDay = document.querySelectorAll('.day');
  let bgColor = 'rgb(119,119,119)';

}