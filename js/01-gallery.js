import { galleryItems } from './gallery-items.js';
import basicLightbox from 'basiclightbox';
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

galleryContainer.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  if (event.target.classList.contains('gallery__image')) {
    const largeImageUrl = event.target.parentElement.href;

    console.log('URL великого зображення:', largeImageUrl);
  }
}

galleryItems.forEach((item) => {
  const galleryItem = renderGalleryItem(item);
  galleryContainer.appendChild(galleryItem);

  galleryItem.addEventListener('click', () => {
    const instance = basicLightbox.create(
      `<img src="${item.original}" alt="${item.description}">`
    );

    instance.show();
  });
});

console.log(galleryItems);
