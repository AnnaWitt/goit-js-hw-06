const textInput = document.querySelector('#name-input');
console.log(textInput);
const outputEl = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
  if (textInput.value.length > 0) {
    outputEl.textContent = event.currentTarget.value;
  } else {
    outputEl.textContent = 'Anonymous';
  }
});
