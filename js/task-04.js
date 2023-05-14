const valueElm = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener('click', onDecrementBtn);

function onDecrementBtn() {
  counterValue--;
  return (valueElm.textContent = counterValue);
}

incrementBtn.addEventListener('click', onIncrementBtn);

function onIncrementBtn() {
  counterValue++;
  return (valueElm.textContent = counterValue);
}
