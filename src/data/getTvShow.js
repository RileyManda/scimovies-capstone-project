import API_URL from '../api/config.js';
import displayEpisodes from '../domView.js';

const getEpisodes = () => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((allEpisodes) => {
      displayEpisodes(allEpisodes);
      console.error('All eps:', allEpisodes);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

export default getEpisodes;
