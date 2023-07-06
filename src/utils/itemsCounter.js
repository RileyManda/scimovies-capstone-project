const countDomItems = (tvshowList) => {
  if (!tvshowList) {
    return 0;
  }
  return tvshowList.children.length;
};

export default countDomItems;
