import { recordLikes } from './utils/recordLikes.js';
import displayItemCount from './data/displayItemCount.js';

const displayTvShows = (allEpisodes, genreId) => {
  const tvshowList = document.getElementById('tvshow-list');

  allEpisodes.forEach((tvshow) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image');

    const imageLink = document.createElement('a');
    imageLink.href = tvshow.url;

    const image = document.createElement('img');
    image.src = tvshow.image.medium;
    image.alt = tvshow.name;

    imageLink.appendChild(image);
    imageContainer.appendChild(imageLink);
    card.appendChild(imageContainer);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = tvshow.name;
    cardContent.appendChild(title);

    const likeIcon = document.createElement('i');
    likeIcon.classList.add('fa-regular', 'fa-heart');
    cardContent.appendChild(likeIcon);

    const likesText = document.createElement('div');
    likesText.classList.add('likes-text');
    cardContent.appendChild(likesText);

    // record likes
    const likeCount = document.createElement('span');
    likeCount.textContent = '0';
    cardContent.appendChild(likeCount);
    let likes = 0;

    likeIcon.addEventListener('click', (event) => {
      const card = event.target.closest('.card');
      if (card) {
        const index = Array.from(card.parentNode.children).indexOf(card);
        likes += 1;
        likeCount.textContent = likes;
        likesText.textContent = `Likes ${likes}`;
        recordLikes(index);
        console.log('Likes:', likes);
      }
    });
    likesText.textContent = `Likes ${likes}`;
    // record likes END
    card.appendChild(cardContent);

    const commentButton = document.createElement('button');
    commentButton.classList.add('comment-btn');
    commentButton.textContent = 'Comments';
    card.appendChild(commentButton);

    // Display the item count
    displayItemCount(genreId, (itemCount) => {
      const itemCountElement = document.createElement('div');
      itemCountElement.textContent = `Total Items: ${itemCount}`;
      tvshowList.appendChild(itemCountElement);
    });

    tvshowList.appendChild(card);
  });
};
export default displayTvShows;
