import { recordLikes } from './utils/recordLikes.js';
import displayLikesData from './displayLikesData.js';

const displayTvShows = (allEpisodes) => {
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

    tvshowList.appendChild(card);
  });

  // Fetch and display likes data
  displayLikesData()
    .then((likesData) => {
      const likeCounts = document.querySelectorAll('.card-content span');
      const likesTexts = document.querySelectorAll('.card-content .likes-text');

      likeCounts.forEach((likeCount) => {
        const index = Array.from(
          likeCount.parentNode.parentNode.parentNode.children,
        ).indexOf(likeCount.parentNode.parentNode);
        const likes = likesData[index] || 0;
        likeCount.textContent = likes;
      });

      likesTexts.forEach((likesText) => {
        const index = Array.from(
          likesText.parentNode.parentNode.children,
        ).indexOf(likesText.parentNode);
        const likes = likesData[index] || 0;
        likesText.textContent = `Likes ${likes}`;
      });
    })
    .catch((error) => {
      console.error('Error fetching likes data:', error);
    });
};
export default displayTvShows;
