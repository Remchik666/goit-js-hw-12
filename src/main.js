import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");
const input = document.querySelector("input[name='search-text']");


form.addEventListener("submit", event => {
    event.preventDefault();

    const query = input.value.trim();

    if (!query) {
        iziToast.error({
            title: "Error",
            message: "Search query cannot be empty!",
            position: 'topRight'
        });
        return;
    }

    clearGallery();
    showLoader();


    getImagesByQuery(query)
    .then(images => {
        hideLoader();
    
        if (images.length === 0) {
            iziToast.warning({
                title: "No results",
                message: "Sorry, no images match your search query. Try again!",
                position: 'topRight'
            });
            return;
        }
    
        createGallery(images);
    })
    
    .catch(() => {
        hideLoader();
    
        iziToast.error({
            title: "Error",
            message: "Something went wrong. Please try again later!",
            position: 'topRight'
        });
    });
    

});