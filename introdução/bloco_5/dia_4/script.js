function getBackgroundColor() {
  let getBackgroundColor = document.querySelector('#backgroundColor').value;
  localStorage.setItem("bgColor", getBackgroundColor);
  setBackgroundColor()
}

function setBackgroundColor() {
  let getMain = document.querySelector('main');
  getMain.style.backgroundColor = localStorage.getItem ('bgColor');
}


function getColorText(){
  let getColorText = document.querySelector('#colorText').value;
  localStorage.setItem("colorText", getColorText);
   setColorText()
}

function setColorText() {
  let getParagraph = document.getElementsByClassName('paragraph');
  for (let index =0; index <getParagraph.length; index +=1){
    getParagraph[index].style.color = localStorage.getItem ('colorText');
  }
}

function getColorTitle(){
  let getColorTitle = document.querySelector('#colorText').value;
  localStorage.setItem("colorTitle", getColorTitle);
   setColorTitle()
}

function setColorTitle() {
  let getTitle = document.getElementById('title');
  getTitle.style.color = localStorage.getItem('colorTitle')
}
function getFontSize (){
  let getFontSize = document.querySelector('#fontSize').value
  localStorage.setItem('fontSize', getFontSize);
  setFontSize()
}

function setFontSize() {
  let getParagraph = document.getElementsByClassName('paragraph');
  for(let index = 0; index < getParagraph.length; index += 1){
    getParagraph[index].style.fontSize = localStorage.getItem('fontSize') + 'px';
  }
}

function getSpacing (){
  let getSpacing = document.querySelector('#spacing').value
  localStorage.setItem('spacing', getSpacing);
  setFontFamily()
}

function setFontFamily() {
  let getParagraph = document.getElementsByClassName('paragraph');
  for(let index = 0; index < getParagraph.length; index += 1){
    getParagraph[index].style.lineHeight = localStorage.getItem('spacing') + 'px';
    line-height
  }
}

function getFontFamily() {
  let getFontFamily = document.querySelector('#fontFamily').value
  localStorage.setItem('fontFamily', getFontFamily);
  setFontFamily()
}

function setFontFamily() {
  let getParagraph = document.getElementsByClassName('paragraph');
  for(let index = 0; index < getParagraph.length; index += 1){
    getParagraph[index].style.fontFamily = localStorage.getItem('fontFamily');
  }
}

function getFontFamilyTitle () {
  let getFontFamilyTitle = document.querySelector('#fontFamily').value
  localStorage.setItem('fontFamilyTitle', getFontFamilyTitle);
  setFontFamilyTitle()
}
function setFontFamilyTitle() {
  let getfontFamilyTitle = document.getElementById('title');
getfontFamilyTitle.style.fontFamily = localStorage.getItem('fontFamilyTitle')
}

window.onload = function () {
  let getButton = document.querySelector('#button')
  getButton.addEventListener('click', getBackgroundColor); 
  getButton.addEventListener('click', getColorText); 
  getButton.addEventListener('click', getColorTitle);
  getButton.addEventListener('click', getFontSize);
  getButton.addEventListener('click', getSpacing);
  getButton.addEventListener('click', getFontFamily);
  getButton.addEventListener('click', getFontFamilyTitle);
  setBackgroundColor(); 
  setColorText();
  setColorTitle();
  setFontSize();
  setFontFamily()
  setFontFamily()
  setFontFamilyTitle()
}


