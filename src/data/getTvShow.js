import { API_URL } from '../api/config.js';
import displayEpisodes from '../domView.js';
import showSnackbar from '../utils/showSnackBar.js';
import { saveListToStorage } from './localStorage.js';

const getTvShows = (genreId) => {
  const url = `${API_URL}?q=${genreId}`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching TV shows');
      }
      return response.json();
    })
    .then((allTvShows) => {
      saveListToStorage(allTvShows);
      displayEpisodes(allTvShows);

      showSnackbar('Data fetched successfully!');
      return allTvShows;
    })
    .catch((error) => {
      console.error('Error:', error);
      throw new Error('Error fetching TV shows');
    });
};

export default getTvShows;
