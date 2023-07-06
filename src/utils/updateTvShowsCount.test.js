import updateTvShowsCount from './updateTvShowsCount.js';

// This test follows the AAA Pattern as required Arrange
describe('updateTvShowsCount', () => {
  let countElement;

  beforeEach(() => {
    countElement = document.createElement('div');
    countElement.setAttribute('id', 'tvshows-count');
    document.body.appendChild(countElement);
  });

  afterEach(() => {
    if (countElement && countElement.parentNode) {
      countElement.parentNode.removeChild(countElement);
    }
  });

  test('should update the TV shows count in the DOM', () => {
    updateTvShowsCount(5);
    expect(countElement.textContent).toBe('TvShows 5');
  });

  test('should handle the case when the element is not found', () => {
    countElement.parentNode.removeChild(countElement);
    updateTvShowsCount(10);
    const updatedCountElement = document.getElementById('tvshows-count');
    expect(updatedCountElement).toBe(null);
  });
});