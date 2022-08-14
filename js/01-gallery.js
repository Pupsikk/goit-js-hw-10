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
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
                </a>
            </div>`;
        })
.join("");
}

galleryContainer.addEventListener("click", onModalMarkup);

function onModalMarkup(evt) {
    evt.preventDefault();
        if (!evt.target.classList.contains("gallery__image")) {
    return;
    }
    const instance = basicLightbox.create(
        `<img src="${evt.target.dataset.source}" width="800" height="600">`,
    {
    btnOpen: () => {
        document.addEventListener("keydown", onKeyAction);
    },
    btnClose: () => {
        document.removeEventListener("keydown", onKeyAction);
    },
    }
);

    instance.show();

    function onKeyAction({ key }) {
    if (key === "Escape") {
        console.log("clock");
        instance.close();
        }
    }
}