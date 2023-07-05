const updateLikesCount = (itemId, likes) => new Promise((resolve, reject) => {
  const card = document.querySelector(`[data-item-id="${itemId}"]`);
  if (card) {
    const likeCount = card.querySelector('.like-count');
    if (likeCount) {
      likeCount.textContent = likes;
      resolve();
    //   window.location.reload();
    } else {
      reject(new Error('Like count element not found'));
    }
  } else {
    reject(new Error('Card element not found'));
  }
});
export default updateLikesCount;
