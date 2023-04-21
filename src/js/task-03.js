const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.getElementsByClassName('gallery');

const markup = images
  .map(
    (image) => `<li><img src="${image.url}" alt="${image.alt}" class="flex" /></li>`,
  )
  .join('');

gallery[0].insertAdjacentHTML('afterbegin', markup);

const galleryImages = document.getElementsByClassName('flex');
// eslint-disable-next-line no-restricted-syntax
for (const image of galleryImages) {
  image.style.height = '240px';
  image.style.width = '400px';
  image.style.borderRadius = '4px';
}
