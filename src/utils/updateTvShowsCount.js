const updateTvShowsCount = (count) => {
  const countElement = document.getElementById('tvshows-count');
  if (countElement) {
    countElement.textContent = `TvShows ${count}`;
  } else {
    console.log('countElement not found');
  }
};

export default updateTvShowsCount;
