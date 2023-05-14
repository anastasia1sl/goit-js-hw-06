const formElement = document.querySelector('.login-form');

formElement.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = formElement.elements.email.value;
  const password = formElement.elements.password.value;

  if (email === '' || password === '') {
    alert('All fields should be filled in');
  }

  const formData = { email, password };
  console.log(formData);

  // or -->  const formData = new FormData(event.currentTarget);
  //   console.log(formData);
  event.currentTarget.reset();
}
