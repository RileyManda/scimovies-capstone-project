import countDomItems from './itemsCounter.js';

describe('countDomItems', () => {
  beforeEach(() => {
    const sectionElement = document.createElement('section');
    sectionElement.setAttribute('id', 'tvshow-list');
    document.body.appendChild(sectionElement);
  });

  afterEach(() => {
    const sectionElement = document.getElementById('tvshow-list');
    document.body.removeChild(sectionElement);
  });

  test('should return the correct count of DOM items', () => {
    const tvshowList = document.getElementById('tvshow-list');

    for (let i = 0; i < 3; i += 1) {
      const itemElement = document.createElement('div');
      tvshowList.appendChild(itemElement);
    }
    expect(countDomItems(tvshowList)).toBe(3);
  });

  test('should return 0 if the DOM list is empty', () => {
    const tvshowList = document.getElementById('tvshow-list');

    expect(countDomItems(tvshowList)).toBe(0);
  });

  test('should return 0 if the DOM list is not found', () => {
    const nonExistentList = document.getElementById('nonexistent-list');
    expect(countDomItems(nonExistentList)).toBe(0);
  });
});
