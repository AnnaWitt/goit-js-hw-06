/* eslint-disable no-restricted-syntax */
const itemsElements = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsElements.length}`);

for (const item of itemsElements) {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  const elementNumber = item.querySelectorAll('li');
  console.log(`Elements: ${elementNumber.length}`);
}
