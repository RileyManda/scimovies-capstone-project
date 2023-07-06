const updateTvShowsCount = (count) => {
  try {
    const countElement = document.getElementById('tvshows-count');
    if (countElement) {
      countElement.textContent = `TvShows ${count}`;
    } else {
      throw new Error('countElement not found');
    }
  } catch (error) {
    throw new Error('Error fetching likes data', error);
  }
};

export default updateTvShowsCount;
