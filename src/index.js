import axios from 'axios';
const API_KEY =
  'live_ZzU8YmZ7BGhDcZ8MoDPGW2AQRGZIcfWPEIZZjYxQWLV1MkJb0N7UBeYzQ3cB5Bs5';
const BREEDS_URL = 'https://api.thecatapi.com/v1/breeds';
const SEARCH_URL = 'https:api.thecatapi.com/v1/images/search?breed_ids=';

const ref = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

axios.defaults.headers.common['x-api-key'] = API_KEY;

function getBreeds() {
  return axios({
    url: BREEDS_URL,
  }).then(function ({ data }) {
    console.log(data);
  });
}

function getCat(breedIds) {
  return axios({ url: `${SEARCH_URL}${breedIds}` }).then(({ data }) => data);
}
