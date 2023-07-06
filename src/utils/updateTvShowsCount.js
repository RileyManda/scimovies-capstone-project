const updateTvShowsCount = (count) => {
  const countElement = document.getElementById('tvshows-count');
  if (countElement) {
    countElement.textContent = `TvShows ${count}`;
  }
};

export default updateTvShowsCount;
