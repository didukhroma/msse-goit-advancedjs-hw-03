import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { ref } from './js/common';
import {
  createSelect,
  hiddenElement,
  visibleElement,
  createInfoMarkup,
} from './js/helpers';

//--------------------------------------------------------------------

homeWork();

ref.select.addEventListener('change', handlerChange);

//--------------------------------------------------------------------
function handlerChange(e) {
  visibleElement(ref.loader);
  hiddenElement(ref.catInfo, ref.error);

  fetchCatByBreed(e.currentTarget.value)
    .then(data => {
      hiddenElement(ref.loader);
      const { breeds, url } = data[0];
      const { name, description, temperament } = breeds[0];
      return { url, name, description, temperament };
    })
    .then(info => {
      createInfoMarkup(info);
      visibleElement(ref.catInfo);
    })
    .catch(err => {
      hiddenElement(ref.loader);
      isibleElement(ref.error);
      console.log(err);
    });
}
//--------------------------------------------------------------------
function homeWork() {
  visibleElement(ref.loader);

  fetchBreeds()
    .then(data => {
      hiddenElement(ref.loader);
      visibleElement(ref.select);
      createSelect(data);
    })
    .catch(err => {
      hiddenElement(ref.loader);
      visibleElement(ref.error);
      console.log(err);
    });
}
