const btnDecrement = document.querySelector('#counter button[data-action ="decrement"');
const btnIncrement = document.querySelector('#counter button[data-action="increment"]');
let counterValue = 0;

function currentCounter() {
  document.getElementById('value').innerText = counterValue;
}
btnIncrement.addEventListener('click', () => {
  counterValue += 1;
  currentCounter();
});

btnDecrement.addEventListener('click', () => {
  counterValue -= 1;
  currentCounter();
});
