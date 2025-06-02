import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const API_KEY = "50632256-d176889c05d2eb53a5e69ee7e";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query, page = 1) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
                per_page: 15,
                page: page
            }
        });

    return response.data.hits;
    } catch (error) {
        return [];
    }
}
