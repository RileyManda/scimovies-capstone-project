const getTvShowsCount = () => {
  const allTvShows = JSON.parse(localStorage.getItem('tvShows')) || [];
  return allTvShows.length;
};

const updateTvShowsCount = (count) => {
  const countElement = document.getElementById('tvshows-count');
  if (countElement) {
    countElement.textContent = `TvShows ${count}`;
  }
};

export { getTvShowsCount, updateTvShowsCount };
