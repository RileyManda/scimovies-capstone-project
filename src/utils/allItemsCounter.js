import getTvShows from '../data/getTvShow.js';
import showSnackbar from './showSnackBar.js';

const displayItemCount = (genreId) => {
  getTvShows(genreId)
    .then((allTvShows) => {
      const itemCount = allTvShows.length;
      console.log(`Total Items: ${itemCount}`);
    })
    .catch((error) => {
      console.error('Error:', error);
      showSnackbar('Error counting items!');
    });
};

export default displayItemCount;