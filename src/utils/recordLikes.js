import { ENV_API } from '../api/config.js';
import showSnackbar from './showSnackBar.js';

const recordLikes = (itemId) => {
  const url = `${ENV_API}${itemId}/likes/`;

  console.log('itemId:', itemId);

  fetch(url, {
    method: 'POST',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Like recorded:', data);
      showSnackbar('Likes recorded successfully!');
    })
    .catch((error) => {
      showSnackbar('Error recording likes!', error);
    });
};

export default recordLikes;
