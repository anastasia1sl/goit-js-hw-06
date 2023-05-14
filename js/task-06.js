const inputElm = document.querySelector('#validation-input');
const length = inputElm.getAttribute('data-length');

console.log(length);

inputElm.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(length)) {
    inputElm.classList.add('valid');
    inputElm.classList.remove('invalid');
  } else {
    inputElm.classList.add('invalid');
    inputElm.classList.remove('valid');
  }
}
