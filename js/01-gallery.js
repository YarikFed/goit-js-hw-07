import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
function renderGalleryItem(item) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = item.original;
  link.setAttribute('data-lightbox', 'gallery');
  link.innerHTML = `<img class="gallery__image" src="${item.preview}" alt="${item.description}" />`;

  galleryItem.appendChild(link);
  return galleryItem;
}

galleryItems.forEach((item) => {
  const galleryItem = renderGalleryItem(item);
  galleryContainer.appendChild(galleryItem);
});
console.log(galleryItems);
