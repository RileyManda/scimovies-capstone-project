import { ENV_API, APP_ID } from '../api/config.js';

const displayLikesData = async () => {
  const url = `${ENV_API}${APP_ID}/likes`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error fetching likes data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching likes data');
  }
};

export default displayLikesData;
