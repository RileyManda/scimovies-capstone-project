const getTvShowsCount = () => {
  const tvshowList = document.getElementById('tvshow-list');
  return tvshowList.children.length;
};

const updateTvShowsCount = (count) => {
  const countElement = document.getElementById('tvshows-count');
  if (countElement) {
    countElement.textContent = `TvShows ${count}`;
  }
};

export { getTvShowsCount, updateTvShowsCount };
