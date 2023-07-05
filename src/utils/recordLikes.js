import { ENV_API, APP_ID } from '../api/config.js';
import showSnackbar from './showSnackBar.js';

const recordLikes = (itemId) => {
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
      } else {
        showSnackbar('Error recording likes!');
      }
    })
    .catch((error) => {
      showSnackbar('Error recording likes!', error);
    });
};

export default recordLikes;
