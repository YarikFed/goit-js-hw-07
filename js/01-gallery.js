import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const divRef = document.querySelector('.gallery');

function createGallaryMarkup(items) {
  return items
    .map(
      (item) => `<div class="gallery__item">
                  <a class="gallery__link" href="${item.original}">
                    <img
                      class="gallery__image"
                      src="${item.preview}" 
                      data-source="${item.original}" 
                      alt="${item.description}"
                    />
                  </a>
                </div>`
    )
    .join("");
}

const addGallaryMarkup = createGallaryMarkup(galleryItems);

divRef.innerHTML = addGallaryMarkup;

divRef.addEventListener("click", onImageClick);

function onImageClick(evt) {
  blockStandartAction(evt);
  if (evt.target.nodeName !== "IMG") {
    return;
  }
   const instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}" width="800" height="600">
    `);
  instance.show();
  divRef.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}

function blockStandartAction(evt) {
  evt.preventDefault();
}
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

//  const instance = basicLightbox.create(`
//       <img src="${largeImageUrl}" width="800" height="600">
//     `);
//     instance.show();