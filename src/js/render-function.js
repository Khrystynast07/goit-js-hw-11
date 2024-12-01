import { list } from '../main';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.list-item a');

export function createMarkup(images) {
  const markup = images
    .map(
      image =>
        `<li class="list-item">
      <a href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}"></a>
      <p>Likes<span>${image.likes}</span></p>
    <p>Views<span>${image.views}</span></p>
    <p>Comments<span>${image.comments}</span></p>
    <p>Downloads<span>${image.downloads}</span></p>
    </li>`
    )
    .join('');
  list.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}
