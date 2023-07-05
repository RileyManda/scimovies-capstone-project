const storageKey = 'scifi-tvshows';

export const getListFromStorage = () => {
  const items = JSON.parse(localStorage.getItem(storageKey));
  if (items) {
    return items.map((item, index) => ({ ...item, index: index + 1 }));
  }
  return [];
};

export const saveListToStorage = (items) => {
  const itemsToSave = items.map(({ index, ...rest }) => rest);
  localStorage.setItem(storageKey, JSON.stringify(itemsToSave));
};
