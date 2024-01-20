//Import
import { ref, HIDDEN_CLASS } from './common';
import { errorToast } from './iziToast';

/**
 * Remove class visually-hidden from element
 *
 * @param {HTMLElement} el - HTMLElement
 * @example function visibleElement(el) {
  el.classList.remove(HIDDEN_CLASS);
}
 */
export function visibleElement(el) {
  el.classList.remove(HIDDEN_CLASS);
}
/**
 * Add class visually-hidden to element
 *
 * @param {HTMLElement} el - HTMLElement
 * @example function hiddenElement(el) {
  el.classList.add(HIDDEN_CLASS);
}
 */
export function hiddenElement(el) {
  el.classList.add(HIDDEN_CLASS);
}

/**
 * Create markup amd insert markup into info box 
 * 
 * @export
 * @param {{ url: String; name: String; description: String; temperament: String; }} param0 - object
 * @param {String} param0.url - source address for image
 * @param {String} param0.name - name of selected breed
 * @param {String} param0.description - description of selected breed
 * @param {String} param0.temperament - temperament text of selected breed
 * @example function createInfoMarkup({ url, name, description, temperament }) {
  const markup = `<div class="cat-info-thumb">
    <img src="${url}" alt="${name} lazy-loading" />
    </div><div class="cat-info-wrapper">
     <h1 class="cat-info-title">${name}</h1>
     <p class="cat-info-description">${description}</p>
     <p class="cat-info-behavior"> <span class="cat-info-behavior-accent">Temperament: </span>${temperament}</p>
     </div>`;
  ref.catInfo.innerHTML = markup;//insert markup 
}
 */
export function createInfoMarkup({ url, name, description, temperament }) {
  const markup = `<div class="cat-info-thumb">
    <img src="${url}" alt="${name} lazy-loading" />
    </div><div class="cat-info-wrapper">
     <h1 class="cat-info-title">${name}</h1>
     <p class="cat-info-description">${description}</p>
     <p class="cat-info-behavior"> <span class="cat-info-behavior-accent">Temperament: </span>${temperament}</p>
     </div>`;
  ref.catInfo.innerHTML = markup; //insert markup
}

/**
 * Check if response status equal status 200
 *
 * @export
 * @param {Object} response - response from server
 * @returns {Object}
 * @example function checkResponseStatus(response) {
  if (response.status !== 200) throw new Error(response.status);
  return response.data;
}
 */
export function checkResponseStatus(response) {
  if (response.status !== 200) throw new Error(response.status);
  return response.data;
}

/**
 * Hide loader, show iziToast error message and print in console error object
 * 
 * @export
 * @param {Error} err - Object error
 * @example function errorFunction(err) {
  hiddenElement(ref.loader); //hide loader
  errorToast();//show iziToast error
  console.log(err);//print in console error object
}
 */
export function errorFunction(err) {
  hiddenElement(ref.loader); //hide loader
  errorToast(); //show iziToast error
  console.log(err); //print in console error object
}

/**
 * Change input Array with data into correct Array for slimSelect
 *
 * @export
 * @param {Array} data - response from server
 * @returns {Array}
 * @example function prepareMainData(data) {
  return data.map(({ id: value, name: text }) => ({
    text,
    value,
  }));
}
 */
export function prepareMainData(data) {
  return data.map(({ id: value, name: text }) => ({
    text,
    value,
  }));
}

/**
 * Change input Data into correct data  for cat info box
 *
 * @export
 * @param {Array} data
 * @returns {{ url: string; name: string; description: string; temperament: string; }}
 * @example unction prepareCatInfo(data) {
  const { breeds, url } = data[0];
  const { name, description, temperament } = breeds[0];
  return { url, name, description, temperament };
}
 */
export function prepareCatInfo(data) {
  const { breeds, url } = data[0];
  const { name, description, temperament } = breeds[0];
  return { url, name, description, temperament };
}
