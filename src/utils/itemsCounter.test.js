import countDomItems from './itemsCounter.js';

describe('countDomItems', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <section id="tvshow-list">
      </section>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should return the correct count of DOM items', () => {
    const tvshowList = document.getElementById('tvshow-list');
    expect(countDomItems(tvshowList)).toBe(3);
  });

  test('should return 0 if the DOM list is empty', () => {
    const tvshowList = document.getElementById('tvshow-list');
    tvshowList.innerHTML = '';
    expect(countDomItems(tvshowList)).toBe(0);
  });

  test('should return 0 if the DOM list is not found', () => {
    const tvshowList = document.getElementById('nonexistent-list');
    expect(countDomItems(tvshowList)).toBe(0);
  });
});