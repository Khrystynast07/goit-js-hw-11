import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesService } from './js/pixabay-api';
import { createMarkup } from './js/render-function';

const form = document.querySelector('.form-search');
export const list = document.querySelector('.image-list');
const loader = document.querySelector('.loader');

form.addEventListener('submit', getImages);

function getImages(event) {
  event.preventDefault();

  const { search } = event.currentTarget.elements;
  if (search.value.trim() === '') {
    return iziToast.error({
      position: 'topRight',
      message: 'Please fill in all input',
    });
  }
  list.innerHTML = '';

  loader.classList.remove('hidden');

  getImagesService(search.value.trim())
    .then(data => {
      if (data.hits.length === 0) {
        return iziToast.info({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      createMarkup(data.hits);

      form.reset();
    })
    .catch(error =>
      iziToast.error({ position: 'topRight', message: error.message })
    )
    .finally(() => loader.classList.add('hidden'));
}
