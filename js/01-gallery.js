import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

galleryItems.forEach((item, index) => {
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

// gallery.addEventListener('click', (event) => {
//   event.preventDefault();
//   const target = event.target;

//   if (target.classList.contains('gallery__image')) {
//     const largeImageUrl = galleryItems.find((item) => item.preview === target.src).original;
//     openImageModal(largeImageUrl);
//   }
// });

// function openImageModal(imageUrl) {
//   window.open(imageUrl, '_blank');
// };