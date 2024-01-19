import { ref, HIDDEN_CLASS } from './common';

export function hiddenElement(...attributes) {
  [...attributes].forEach(el => el.classList.add(HIDDEN_CLASS));
}
export function visibleElement(...attributes) {
  [...attributes].forEach(el => el.classList.remove(HIDDEN_CLASS));
}

export function createSelect(data) {
  const markup = createSelectOptions(data);
  insertSelectOptions(markup);
}

function insertSelectOptions(markup) {
  ref.select.insertAdjacentHTML('afterbegin', markup);
}
function createSelectOptions(data) {
  return data.map(({ id, name }) => createSelectOpt(id, name)).join();
}
function createSelectOpt(id, text) {
  return `<option value=${id}>${text}</option>`;
}

export function createInfoMarkup({ url, name, description, temperament }) {
  const markup = `<div class="cat-info-thumb">
    <img src="${url}" alt="${name} lazy-loading" />
    </div><div class="cat-info-wrapper">
     <h1 class="cat-info-title">${name}</h1>
     <p class="cat-info-description">${description}</p>
     <p class="cat-info-behavior"> <span class="cat-info-behavior-accent">Temperament: </span>${temperament}</p>
     </div>`;
  ref.catInfo.innerHTML = markup;
}
