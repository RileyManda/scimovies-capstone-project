import { ENV_API, APP_ID } from './api/config.js';

const displayLikesData = () => {
  const url = `${ENV_API}${APP_ID}/likes`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching likes data');
      }
      return response.json();
    })
    .then((data) => {
      console.log(JSON.stringify(data)); // Display likes data as JSON in the console
    })
    .catch((error) => {
      console.error('Error fetching likes data:', error);
    });
};

export default displayLikesData;
