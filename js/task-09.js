function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyBackgroundColor = document.body;
const buttonClick = document.querySelector('.change-color');
const currentColor = document.querySelector('.color');

const handleClick = () => {
  currentColor.textContent = getRandomHexColor();
  bodyBackgroundColor.style.backgroundColor = getRandomHexColor();
};

buttonClick.addEventListener('click', handleClick);
