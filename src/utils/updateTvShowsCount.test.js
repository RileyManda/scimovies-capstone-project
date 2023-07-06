import updateTvShowsCount from './updateTvShowsCount.js';

// This test follows the AAA Pattern as required Arrange
describe('updateTvShowsCount', () => {
  beforeEach(() => {
    const countElement = document.createElement('div');
    countElement.setAttribute('id', 'tvshows-count');
    document.body.appendChild(countElement);
  });

  afterEach(() => {
    const countElement = document.getElementById('tvshows-count');
    document.body.removeChild(countElement);
  });

  test('should update the TV shows count in the DOM', () => {
    updateTvShowsCount(5);
    const countElement = document.getElementById('tvshows-count');
    expect(countElement.textContent).toBe('TvShows 5');
  });

  test('should not update the TV shows count if the element is not found', () => {
    const countElement = document.getElementById('tvshows-count');
    document.body.removeChild(countElement);

    updateTvShowsCount(10);
    const updatedCountElement = document.getElementById('tvshows-count');
    expect(updatedCountElement).toBeNull();
  });
});