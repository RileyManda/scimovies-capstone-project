import { API_URL } from '../api/config.js';
import displayEpisodes from '../domView.js';
import showSnackbar from '../utils/showSnackBar.js';
import { saveListToStorage } from './localStorage.js';

const getTvShows = (genreId) => {
  const url = `${API_URL}?q=${genreId}`;

  fetch(url)
    .then((response) => response.json())
    .then((allTvShows) => {
      saveListToStorage(allTvShows);
      displayEpisodes(allTvShows);

      showSnackbar('Data fetched successfully!');
    })
    .catch((error) => {
      showSnackbar('Error fetching data!', error);
    });
};

export default getTvShows;
