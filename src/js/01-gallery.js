// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

(function renderGallery() {
  const galleryRef = document.querySelector('.gallery');
  galleryRef.insertAdjacentHTML(
    'afterbegin',
    galleryItems
      .map(
        ({ preview, original, description }, index) =>
          `<a class="gallery__item" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}"  />
                    </a>`,
      )
      .join(''),
  );
})();

const options = {
  captionsData: 'alt',
  captionDelay: 250,
};

new SimpleLightbox('.gallery a', options);
