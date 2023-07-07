import { ENV_API, APP_ID } from '../api/config.js';

const displayLikesData = async () => {
  const url = `${ENV_API}${APP_ID}/likes`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error fetching likes data');
  }

  const data = await response.json();

  if (data && data.length > 0) {
    return data;
  }
  return 'No likes found';
};

export default displayLikesData;
