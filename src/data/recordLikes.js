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
        return fetchLikes();
      }
      throw new Error('Error recording likes!');
    })
    .then((likesData) => {
      console.log('recordLikes.js beep bop:', likesData);
      return updateLikesCount(itemId, likesData.likes); // Return the promise from updateLikesCount
    })
    .catch((error) => {
      showSnackbar('Error recording likes!', error);
    });
};
export default recordLikes;