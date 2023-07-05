import './index.css';
import getTvShows from './data/getTvShow.js';
import fetchLikes from './data/fetchLikes.js';
import displayTvShows from './domView.js';
import displayItemCount from './data/displayItemCount.js';

getTvShows();
fetchLikes();

getTvShows()
  .then((allTvShows) => {
    displayItemCount(allTvShows, (itemCount) => {
      displayTvShows(allTvShows, itemCount);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });