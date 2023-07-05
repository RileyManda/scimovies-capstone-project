import { API_URL } from '../api/config.js';

const getTvShowsCount = (genreId) => {
  const url = `${API_URL}?q=${genreId}`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      return response.json();
    })
    .then((allTvShows) => allTvShows.length)
    .catch((error) => {
      throw error;
    });
};

const updateTvShowsCount = (count) => {
  const countElement = document.getElementById('tvshows-count');
  if (countElement) {
    countElement.textContent = count;
  }
};

export { getTvShowsCount, updateTvShowsCount };
