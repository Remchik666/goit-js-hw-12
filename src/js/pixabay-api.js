import axios from "axios";
import "izitoast/dist/css/iziToast.min.css";
const API_KEY = "50632256-d176889c05d2eb53a5e69ee7e"; 
const BASE_URL = "https://pixabay.com/api/";


export function getImagesByQuery(query) {
    return axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            per_page: 21
        },
    })
    .then(response => {
        return response.data.hits;
    })
    .catch(() => {
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight'
        });
        return [];
    });
}