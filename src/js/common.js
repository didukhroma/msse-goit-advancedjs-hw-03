/**
 * API_KEY for https://thecatapi.com/
 *
 * @type {string}
 * @example const API_KEY =
  'live_ZzU8YmZ7BGhDcZ8MoDPGW2AQRGZIcfWPEIZZjYxQWLV1MkJb0N7UBeYzQ3cB5Bs5';

 */
export const API_KEY =
  'live_ZzU8YmZ7BGhDcZ8MoDPGW2AQRGZIcfWPEIZZjYxQWLV1MkJb0N7UBeYzQ3cB5Bs5';

/**
 * BASE_URL for requests
 *
 * @type {string}
 * @example BASE_URL = 'https://api.thecatapi.com/v1'

 */
export const BASE_URL = 'https://api.thecatapi.com/v1';

/**
 * Routes for requests 
 * @date 1/20/2024 - 6:57:22 PM
 *
 * @type {{ fetchAll: string; fetchCat: string; }}
 * @example const routes = {
  fetchAll: '/breeds',
  fetchCat: '/images/search?breed_ids=',
};
 */
export const routes = {
  fetchAll: '/breeds',
  fetchCat: '/images/search?breed_ids=',
};

/**
 * Class for hide elements
 *
 * @type {string}
 * @example const HIDDEN_CLASS = 'visually-hidden';
 */
export const HIDDEN_CLASS = 'visually-hidden';

/**
 * References Object
 *
 * @type {{ select: HTMLElement | null; selectWrapper: HTMLElement | null; loader: HTMLElement | null; catInfo: HTMLElement | null; }}
 *  @property {HTMLElement} select - HTML Element select
 * @property {HTMLElement} selectWrapper - HTML Element wrapper for select
 * @property {HTMLElement} loader -HTML Element loader
 * @property {HTMLElement} catInfo -HTML Element cat info box
 * @example const ref = {
  select: document.querySelector('.breed-select'),
  selectWrapper: document.querySelector('.select-wrapper'),
  loader: document.querySelector('.loader-wrapper'),
  catInfo: document.querySelector('.cat-info'),
};
 */
export const ref = {
  select: document.querySelector('.breed-select'),
  selectWrapper: document.querySelector('.select-wrapper'),
  loader: document.querySelector('.loader-wrapper'),
  catInfo: document.querySelector('.cat-info'),
};
