const API_KEY = '47393143-e8759780233395bfabd4940e8';

export function getImagesService(query) {
  return fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
