const input = document.querySelector('#name-input');
const nameInput = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
  // console.log(event.currentTarget.value);
  nameInput.textContent = event.currentTarget.value || 'Anonymous';
}
