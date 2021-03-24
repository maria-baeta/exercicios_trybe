const clickCount = () => {
  let contador = document.querySelector('#clicks');
  const recuperaButton = document.querySelector('#buttonClick');
  recuperaButton.addEventListener('click', function () {
    let numeroClicks = parseInt(contador.textContent) +1;
    contador.textContent = numeroClicks
  })
};
clickCount()

