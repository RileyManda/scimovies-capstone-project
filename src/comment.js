const showPopup = (title, language, description, comments) => {
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');

  const popupContent = document.createElement('div');
  popupContent.classList.add('popup-content');

  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(popupContainer);
  });
  popupContent.appendChild(closeButton);

  const titleElement = document.createElement('h2');
  titleElement.textContent = title;
  popupContent.appendChild(titleElement);

  const languageElement = document.createElement('p');
  languageElement.textContent = `Language: ${language}`;
  popupContent.appendChild(languageElement);

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;
  popupContent.appendChild(descriptionElement);

  const commentsElement = document.createElement('div');
  commentsElement.classList.add('comments');
  comments.forEach((comment) => {
    const commentItem = document.createElement('div');
    commentItem.classList.add('comment-item');

    const dateElement = document.createElement('p');
    dateElement.textContent = comment.date;
    commentItem.appendChild(dateElement);

    const commentTextElement = document.createElement('p');
    commentTextElement.textContent = comment.text;
    commentItem.appendChild(commentTextElement);

    const authorElement = document.createElement('p');
    authorElement.textContent = comment.author;
    commentItem.appendChild(authorElement);

    commentsElement.appendChild(commentItem);
  });
  popupContent.appendChild(commentsElement);

  popupContainer.appendChild(popupContent);
  document.body.appendChild(popupContainer);
};

export default showPopup;
