import axios from 'axios';
import { API_KEY, BASE_URL, routes } from './common';

/**
 * Default API_KEY for Axios
 */
axios.defaults.headers.common['x-api-key'] = API_KEY;
/**
 * Default URL for Axios
 */
axios.defaults.baseURL = BASE_URL;

/**
 * Get all breeds
 *
 *
 * @export
 * @returns {Promise}
 * @example function fetchBreeds() {
  return axios(routes.fetchAll);

 */
export function fetchBreeds() {
  return axios(routes.fetchAll);
}

/**
 * Get breed info
 *
 *
 * @export
 * @returns {Promise}
 * @example function fetchBreeds() {
  return axios(routes.fetchAll);

 */
export function fetchCatByBreed(breedId) {
  return axios({
    url: `${routes.fetchCat}${breedId}`,
  });
}
