import { ENV_API, APP_ID } from '../api/config.js';
import showSnackbar from '../utils/showSnackBar.js';
import fetchLikes from './fetchLikes.js';
import updateLikesCount from '../utils/updateLikesCount.js';

export const recordLikes = (itemId) => {
  const url = `${ENV_API}${APP_ID}/likes/`;

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemId }),
  })
    .then((response) => {
      if (response.ok) {
        showSnackbar('Likes recorded successfully!');
        window.location.reload();
        return fetchLikes();
      }
      throw new Error('Error recording likes!');
    })
    .then((likesData) => updateLikesCount(itemId, likesData.likes))
    .catch((error) => {
      showSnackbar('Error recording likes!', error);
    });
};

export default recordLikes;
