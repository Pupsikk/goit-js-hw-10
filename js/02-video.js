import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// получаем доступ к div где будет храниться коллекция
const galleryContainer = document.querySelector('.gallery');
// создаем переменую где будет храниться вся галерея
const galleryMarkup = createGalleryCardsMarkup(galleryItems);
// добавляем созданную галерею в разметку
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryCardsMarkup(galleryItems) {
return galleryItems
    .map(({ preview, original, description }) => {
        return `
        <li class="gallery__li">
            <a class="gallery__item" 
                href="${original}">
                    <img class="gallery__image" 
                    src="${preview}" 
                    alt="${description}" />
            </a>
        </li>`;
    })
    .join("");
}

galleryContainer.addEventListener("click", onModalMarkup);

function onModalMarkup(evt) {
    evt.preventDefault();
        if (!evt.target.classList.contains("gallery__image")) {
    return;
    }
}

var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});