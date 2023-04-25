const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const header = item.querySelector('h2').textContent;
  console.log(`Category: ${header}`);
  const numberEl = item.querySelectorAll('li').length;
  console.log(`Elements: ${numberEl}`);
});
