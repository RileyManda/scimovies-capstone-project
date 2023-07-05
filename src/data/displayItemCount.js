import showSnackbar from '../utils/showSnackBar.js';
import getTvShows from './getTvShow.js';

const displayItemCount = (genreId, callback) => {
  getTvShows(genreId)
    .then((allTvShows) => {
      const itemCount = allTvShows.length;
      callback(itemCount);
    })
    .catch((error) => {
      console.error('Error:', error);
      showSnackbar('Error counting items!');
    });
};

export default displayItemCount;
