import API_URL from '../api/config.js';
import displayEpisodes from '../domView.js';
import showSnackbar from '../utils/showSnackBar.js';

const getEpisodes = (genreId) => {
  const url = `${API_URL}?q=${genreId}`;

  fetch(url)
    .then((response) => response.json())
    .then((allEpisodes) => {
      displayEpisodes(allEpisodes);
      showSnackbar('Data fetched successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
      showSnackbar('Error fetching data!');
    });
};

export default getEpisodes;
