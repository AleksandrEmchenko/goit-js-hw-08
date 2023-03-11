import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


let lightbox = new SimpleLightbox('.gallery a', { /* options */ });

const makeElementOfGallery = ({ preview, original, description }) => {
    return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
      `;
  };
  
  const makeElements = galleryItems.map(makeElementOfGallery).join("");
  
  const galleryEl = document.querySelector(".gallery");
  galleryEl.insertAdjacentHTML("afterbegin", makeElements);
  
  new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});