import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

function renderGallery() {
 galleryItems.forEach((item) => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const preview = document.createElement('img');
    preview.classList.add('gallery-item-preview');
    preview.src = item.preview;
    preview.alt = item.description;

    const original = document.createElement('img');
    original.classList.add('gallery-item-original');
    original.src = item.original;
    original.alt = item.description;

    const description = document.createElement('div');
    description.classList.add('gallery-item-description');

    const paragraph = document.createElement('p');
    paragraph.textContent = item.description;

    description.appendChild(paragraph);
    galleryItem.appendChild(preview);
    galleryItem.appendChild(original);
    galleryItem.appendChild(description);

    gallery.appendChild(galleryItem);
 });
}

renderGallery();

console.log(galleryItems);
