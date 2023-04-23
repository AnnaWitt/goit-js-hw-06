function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const numberEl = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    size += 10;
    divEl.style.backgroundColor = getRandomHexColor();
    boxesEl.append(divEl);
  }
}
createBtn.addEventListener('click', () => {
  const amount = Number(document.querySelector('#controls input').value);
  createBoxes(amount);
});

function destroyBoxes() {
  boxesEl.innerHTML = '';
  numberEl.value = '';
}
destroyBtn.addEventListener('click', destroyBoxes);
