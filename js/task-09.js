function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyBackgroundColor = document.body;
const buttonClick = document.querySelector('.change-color');
const currentColor = document.querySelector('.color');

const handleClick = () => {
  const newColor = getRandomHexColor();
  currentColor.textContent = newColor;
  bodyBackgroundColor.style.backgroundColor = newColor;
};

buttonClick.addEventListener('click', handleClick);
