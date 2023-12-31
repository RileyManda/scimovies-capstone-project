import { recordLikes } from '../data/recordLikes.js';
import displayLikesData from './displayLikesData.js';
import updateLikesCount from '../utils/updateLikesCount.js';
import countDomItems from '../utils/itemsCounter.js';
import updateTvShowsCount from '../utils/updateTvShowsCount.js';

const displayTvShows = (allEpisodes) => {
  const tvshowList = document.getElementById('tvshow-list');

  const countElements = document.getElementById('tvshows-count');
  const count = countDomItems(tvshowList);
  updateTvShowsCount(count);
  countElements.textContent = `TvShows ${count}`;
  updateTvShowsCount(allEpisodes.length);

  allEpisodes.forEach((tvshow, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.itemId = index;

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
    // likeCount.textContent = '0';
    likeCount.classList.add('like-count');
    cardContent.appendChild(likeCount);
    let likes = 0;

    likeIcon.addEventListener('click', (event) => {
      const card = event.target.closest('.card');
      if (card) {
        const itemId = parseInt(card.dataset.itemId, 10);
        likes += 1;
        likesText.textContent = 'Yeepee!!';
        recordLikes(itemId);
        updateLikesCount(itemId);
        const heart = document.createElement('i');
        heart.classList.add('fas', 'fa-heart', 'floating-heart');
        card.appendChild(heart);
        setTimeout(() => {
          heart.remove();
          likesText.textContent = `Likes ${likes}`;
        }, 1500);
      }
    });

    // record likes END
    card.appendChild(cardContent);

    const commentButton = document.createElement('button');
    commentButton.classList.add('comment-btn');
    commentButton.textContent = 'Comments';
    card.appendChild(commentButton);

    tvshowList.appendChild(card);
  });

  // Fetch and display likes data
  displayLikesData().then((likesData) => {
    const likesTexts = document.querySelectorAll('.card .likes-text');
    likesTexts.forEach((likesText, index) => {
      const likes = likesData[index]?.likes || 0;
      likesText.textContent = `Likes ${likes}`;
    });
  });
};
export default displayTvShows;
