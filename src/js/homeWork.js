//Import
import { ref } from './common';
import { fetchBreeds } from './cat-api';
import {
  hiddenElement,
  visibleElement,
  checkResponseStatus,
  errorFunction,
  prepareMainData,
} from './helpers';
import { select, addDefaultValue } from './slimSelect';
//------------------------------------------------
//Export

/**
 * Home work
 * @export
 * @example   function homeWork() {
  visibleElement(ref.loader); // start loader
  hiddenElement(ref.select); // hide select

  fetchBreeds() // get breeds
    .then(checkResponseStatus) //check status
    .then(prepareMainData) //prepare data 
    .then(addDefaultValue) // add default value
    .then(newData => {
      setTimeout(() => {
        hiddenElement(ref.loader); // hide loader
        visibleElement(ref.select); // visible select
      }, 500);
      select.setData(newData); //set data
    })
    .catch(errorFunction); // error
}

 */
export function homeWork() {
  visibleElement(ref.loader); // start loader
  hiddenElement(ref.select); // hide select

  fetchBreeds() // get breeds
    .then(checkResponseStatus) //check status
    .then(prepareMainData) //prepare data
    .then(addDefaultValue) // add default value
    .then(newData => {
      setTimeout(() => {
        hiddenElement(ref.loader); // hide loader
        visibleElement(ref.select); // visible select
      }, 500);
      select.setData(newData); //set data
    })
    .catch(errorFunction); // error
}
