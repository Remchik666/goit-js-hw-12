import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: 'alt', captionDelay: 250
});


export function createGallery(images) {
    const markup = images
        .map(({ webformatURL, largeImageURL, tags, likes, comments, views, downloads }) => {
            const processedTags = tags
                .split(',')
                .map(tag => tag.trim())
                .slice(0, 5)
                .join(', ');
                return `<li class="gallery-item">
                <a href="${largeImageURL}" class="gallery-item">
                    <div class="img-container">
                        <img src="${webformatURL}" alt="${processedTags}" />
                        <ul class="overlay">
                            <li class="stats">Likes ${likes}</li>
                            <li class="stats">Views ${views}</li>
                            <li class="stats">Comments ${comments}</li>
                            <li class="stats">Downloads ${downloads}</li>
                        </ul>
                    </div>
                </a>
            </li>`
        })
        .join("");
        
    gallery.innerHTML = markup;
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = "";
}

export function showLoader() {
    document.querySelector(".loader").classList.add("visible");
}

export function hideLoader() {
    document.querySelector(".loader").classList.remove("visible");
}
