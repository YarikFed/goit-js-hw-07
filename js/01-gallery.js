import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  })
  .join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

galleryList.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.nodeName === 'IMG') {
    const source = e.target.dataset.source;
    const alt = e.target.alt;

    const instance = basicLightbox.create(`
      <img src="${source}" alt="${alt}">
    `);

    instance.show();
  }
});
console.log(galleryItems);
