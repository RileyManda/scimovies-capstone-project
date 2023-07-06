import { API_URL } from '../api/config.js';
import displayTvShows from '../view/domView.js';
import showSnackbar from '../utils/showSnackBar.js';
import { saveListToStorage } from './localStorage.js';

const getTvShows = (genreId) => {
  const url = `${API_URL}?q=${genreId}`;

  fetch(url)
    .then((response) => response.json())
    .then((allTvShows) => {
      const limitedTvShows = allTvShows.slice(0, 6);
      saveListToStorage(limitedTvShows);
      displayTvShows(limitedTvShows);

      showSnackbar('Data fetched successfully!');
    })
    .catch((error) => {
      showSnackbar('Error fetching data!', error);
    });
};

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

export { getTvShows, getTvShowsCount };
