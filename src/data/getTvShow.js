import API_URL from '../api/config.js';

const getEpisodes = () => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((allEpisodes) => {
      console.log(allEpisodes); // Log the list of TV shows to the console
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

export default getEpisodes;
