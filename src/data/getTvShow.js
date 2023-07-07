import { API_URL } from '../api/config.js';
import displayTvShows from '../view/domView.js';
import showSnackbar from '../utils/showSnackBar.js';
import { saveListToStorage } from './localStorage.js';

const getTvShows = async (genreId) => {
  const url = `${API_URL}?q=${genreId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error fetching data');
    }

    const allTvShows = await response.json();
    const sciFiTvShows = allTvShows.slice(0, 6);
    saveListToStorage(sciFiTvShows);
    displayTvShows(sciFiTvShows);

    showSnackbar('Data fetched successfully!');
  } catch (error) {
    showSnackbar('Error fetching data!', error);
  }
};

export default getTvShows;
