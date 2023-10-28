import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector('.gallery');

galleryItems.forEach((item) => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = item.original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);
  gallery.appendChild(galleryItem);
});

gallery.addEventListener('click', (event) => {
  const clickedElement = event.target;

  if (clickedElement.tagName === 'IMG') {
    const largeImageUrl = clickedElement.parentElement.href;
    console.log(largeImageUrl);
  }
});

import * as basicLightbox from 'basiclightbox'

const instance = basicLightbox.create(`
    <img src="${largeImageUrl}" width="800" height="600" alt="${item.description}">
`)

instance.show()