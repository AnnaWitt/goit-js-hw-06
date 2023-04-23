const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

// eslint-disable-next-line no-restricted-syntax
for (const item of items) {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  const elementNumber = item.querySelectorAll('li');
  console.log(`Elements: ${elementNumber.length}`);
}
