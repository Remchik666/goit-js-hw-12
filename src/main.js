import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, appendGallery, clearGallery, showLoader, hideLoader, showMoreButton, hideMoreButton, showMoreText, hideMoreText } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const input = document.querySelector("input[name='search-text']");
const loadMoreBtn = document.querySelector(".more-btn");

let currentPage = 1;
let currentQuery = "";

form.addEventListener("submit", async event => {
    event.preventDefault();

    currentQuery = input.value.trim();

    if (!currentQuery) {
        iziToast.error({
            title: "Error",
            message: "Search query cannot be empty!",
            position: "topRight",
        });
        return;
    }

    currentPage = 1;
    clearGallery();
    hideMoreButton();
    showLoader();

    try {
        const images = await getImagesByQuery(currentQuery, currentPage);
        hideLoader();

        if (images.length === 0) {
            iziToast.warning({
                title: "No results",
                message: "Sorry, no images match your search query. Try again!",
                position: "topRight",
            });
            return;
        }

        createGallery(images);

        if (images.length === 15) {
            showMoreButton();
        } else { 
            hideMoreButton();
        }
    } catch (error) {
        hideLoader();
        iziToast.error({
            title: "Error",
            message: "Something went wrong. Please try again later!",
            position: "topRight",
        });
    }
});

loadMoreBtn.addEventListener("click", async () => {
    currentPage++;
    hideMoreButton();
    showMoreText();
    
    try {
        const images = await getImagesByQuery(currentQuery, currentPage);
        hideMoreText();

        if (images.length === 0) {
            iziToast.info({
                title: "End of results",
                message: "No more images found.",
                position: "topRight",
            });
            hideMoreButton();
            return;
        }

        appendGallery(images);
        const { height: cardHeight } = document
            .querySelector(".gallery")
            .firstElementChild.getBoundingClientRect();
        window.scrollBy({
            top: cardHeight * 2,
            behavior: "smooth",
        });
        if (images.length < 15) {
            hideMoreButton();
        } else { 
            showMoreButton();
        }
    } catch (error) {
        hideMoreText();
        iziToast.error({
            title: "Error",
            message: "Something went wrong. Please try again later!",
            position: "topRight",
        });
    }
});
