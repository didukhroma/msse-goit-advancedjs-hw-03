import SlimSelect from 'slim-select';
import { fetchCatByBreed } from './cat-api';
import {
  checkResponseStatus,
  visibleElement,
  hiddenElement,
  createInfoMarkup,
  prepareCatInfo,
  errorFunction,
} from './helpers';
import { ref } from './common';

/**
 * Default value for first option in select
 *
 * @type {string}
 * @example const DEFAULT_VALUE = 'placeholder';
 */
const DEFAULT_VALUE = 'placeholder';

/**
 * Base settings fro slimSelect
 *
 * @type {{ select: string; settings: { placeholderText: string; }; events: { beforeChange: () => void; afterChange: (newVal: any) => void; }; }}
 * @description  Read more about slimSelect settings at https://slimselectjs.com/
 * @example const selectSettings = {
  select: `.breed-select`,
  settings: {
    placeholderText: 'Select breed',
  },
  events: {
    beforeChange: () => {
      visibleElement(ref.loader), // visible loader
        hiddenElement(ref.selectWrapper), // hide select
        hiddenElement(ref.catInfo); //hide cat info box
    },
    afterChange: newVal => {
      const { value } = newVal[0];

      if (value === DEFAULT_VALUE) return; // check  first value

      fetchCatByBreed(value) //get breed info
        .then(checkResponseStatus) // check response status
        .then(prepareCatInfo) // prepare  breed info
        .then(createInfoMarkup) // create and insert markup
        .then(() => {
          hiddenElement(ref.loader); // hide loader
          visibleElement(ref.selectWrapper); //visible select
          visibleElement(ref.catInfo); // visible cat info box
        }) 
        .catch(errorFunction); // error function
    },
  },
};
 */
const selectSettings = {
  select: `.breed-select`,
  settings: {
    placeholderText: 'Select breed',
  },
  events: {
    beforeChange: () => {
      visibleElement(ref.loader), // visible loader
        hiddenElement(ref.selectWrapper), // hide select
        hiddenElement(ref.catInfo); //hide cat info box
    },
    afterChange: newVal => {
      const { value } = newVal[0];

      if (value === DEFAULT_VALUE) return; // check  first value

      fetchCatByBreed(value) //get breed info
        .then(checkResponseStatus) // check response status
        .then(prepareCatInfo) // prepare  breed info
        .then(createInfoMarkup) // create and insert markup
        .then(() => {
          hiddenElement(ref.loader); // hide loader
          visibleElement(ref.selectWrapper); //visible select
          visibleElement(ref.catInfo); // visible cat info box
        })
        .catch(errorFunction); // error function
    },
  },
};

/**
 * new slimSelect
 *
 * @type {new SlimSelect} - new slimSelect
 * @example const select = new SlimSelect(selectSettings);

 */
export const select = new SlimSelect(selectSettings);

/**
 *  Add first disabled value for selector
 *
 * @export
 * @param {Array} data - response from server
 * @returns {Array}
 * @example function addDefaultValue(data) {
  return [
    { value: `${DEFAULT_VALUE}`, text: 'Select Breed', display: false },
    ...data,
  ];
}
 */
export function addDefaultValue(data) {
  return [
    { value: `${DEFAULT_VALUE}`, text: 'Select Breed', display: false },
    ...data,
  ];
}
