// eslint-disable-next-line no-unused-vars
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach((ingredient) => {
  const listElement = document.createElement('li');
  listElement.textContent = ingredient;
  listElement.classList.add('item');
  ingredientsList.append(listElement);
});
console.log(ingredientsList);
