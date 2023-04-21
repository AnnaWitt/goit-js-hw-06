const inputValue = document.querySelector('#validation-input');

inputValue.addEventListener('blur', () => {
  inputValue.classList.remove('valid', 'invalid');
  if (inputValue.value.length === Number(inputValue.dataset.length)) {
    inputValue.classList.add('valid');
  } else {
    inputValue.classList.add('invalid');
  }
});
