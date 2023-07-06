import updateTvShowsCount from './updateTvShowsCount.js';

// This test follows the AAA Pattern as required Arrange

describe('updateTvShowsCount', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="tvshows-count"></div>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should update the TV shows count in the DOM', () => {
    updateTvShowsCount(5);
    const countElement = document.getElementById('tvshows-count');
    expect(countElement.textContent).toBe('TvShows 5');
  });

  test('should not update the TV shows count if the element is not found', () => {
    updateTvShowsCount(10);
    const countElement = document.getElementById('tvshows-count');
    expect(countElement).toBeNull();
  });
});