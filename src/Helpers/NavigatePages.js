const navigatePages = (currentPageNumber, direction, updatePage) => {
  if (direction === "next") {
    if (currentPageNumber < 5) {
      updatePage(currentPageNumber + 1);
    }
  }

  if (direction === "previous") {
    if (currentPageNumber > 1) {
      updatePage(currentPageNumber - 1);
    }
  }
};

export default navigatePages;
