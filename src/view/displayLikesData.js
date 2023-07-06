import { ENV_API, APP_ID } from '../api/config.js';

const displayLikesData = () => {
  const url = `${ENV_API}${APP_ID}/likes`;

  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching likes data');
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error); // Reject the promise with the error
      });
  });
};

export default displayLikesData;
