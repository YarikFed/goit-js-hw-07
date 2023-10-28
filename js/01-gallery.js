import { galleryItems } from './gallery-items.js';

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

// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="${galleryItems.original}" width="800" height="600" alt="${galleryItems.description}">
// `)

// instance.show()

console.log(galleryItems);
