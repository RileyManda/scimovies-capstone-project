import { ENV_API, APP_ID } from '../api/config.js';

const fetchLikes = () => {
  const url = `${ENV_API}${APP_ID}/likes`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching likes data');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Fetched likes data:', data);
      return data;
    })
    .catch((error) => {
      console.error('Error fetching likes data:', error);
    });
};

export default fetchLikes;
