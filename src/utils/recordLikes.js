import { ENV_API, APP_ID } from '../api/config.js';
import showSnackbar from './showSnackBar.js';
import fetchLikes from '../data/fetchLikes.js';

export const updateLikesCount = (itemId, likes) => new Promise((resolve, reject) => {
  const card = document.querySelector(`[data-item-id="${itemId}"]`);
  if (card) {
    const likeCount = card.querySelector('.like-count');
    if (likeCount) {
      likeCount.textContent = likes;
      resolve(); // Resolve the promise when the likes count is updated
    } else {
      reject(new Error('Like count element not found'));
    }
  } else {
    reject(new Error('Card element not found'));
  }
});

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
