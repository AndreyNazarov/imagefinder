function fetchPictures(query, page) {
  const BASE_URL = "https://pixabay.com/api/";
  const API_KEY = "18616543-61f088c3928fc4bac834774e6";
  return fetch(
    `${BASE_URL}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error("Something is wrong, please try again"));
  });
}

const API = {
  fetchPictures,
};

export default API;
