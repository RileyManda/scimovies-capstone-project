const displayEpisodes = (allEpisodes) => {
  const tvshowList = document.getElementById('tvshow-list');

  allEpisodes.forEach((episode) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image');

    const imageLink = document.createElement('a');
    imageLink.href = episode.url;

    const image = document.createElement('img');
    image.src = episode.image.medium;
    image.alt = episode.name;

    imageLink.appendChild(image);
    imageContainer.appendChild(imageLink);
    card.appendChild(imageContainer);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = episode.name;
    cardContent.appendChild(title);

    const likeIcon = document.createElement('i');
    likeIcon.classList.add('fa-regular', 'fa-heart');
    cardContent.appendChild(likeIcon);

    card.appendChild(cardContent);

    const commentButton = document.createElement('button');
    commentButton.classList.add('comment-btn');
    commentButton.textContent = 'Comments';
    card.appendChild(commentButton);

    tvshowList.appendChild(card);
  });
};

export default displayEpisodes;
