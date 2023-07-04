import { ENV_API, APP_ID } from '../api/config.js';
import showSnackbar from './showSnackBar.js';

const recordLikes = (itemId) => {
  const url = `${ENV_API}${APP_ID}/likes/`;

  console.log('itemId:', itemId);

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemId }), // Use "item_id" as the key
  })
    .then((response) => {
      if (response.ok) {
        console.log('Like recorded successfully');
        showSnackbar('Likes recorded successfully!');
      } else {
        console.error('Error recording likes');
        showSnackbar('Error recording likes!');
      }
    })
    .catch((error) => {
      console.error('Error recording likes:', error);
      showSnackbar('Error recording likes!');
    });
};

export default recordLikes;
