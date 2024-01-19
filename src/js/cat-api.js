import axios from 'axios';
import { API_KEY, BREEDS_URL, SEARCH_URL } from './common';
axios.defaults.headers.common['x-api-key'] = API_KEY;

export function fetchBreeds() {
  return axios({
    url: BREEDS_URL,
  }).then(res => {
    if (res.status !== 200) throw new Error(res.status);
    return res.data;
  });
}

export function fetchCatByBreed(breedId) {
  return axios({
    url: `${SEARCH_URL}${breedId}`,
  }).then(res => {
    if (res.status !== 200) throw new Error(res.status);
    return res.data;
  });
}
