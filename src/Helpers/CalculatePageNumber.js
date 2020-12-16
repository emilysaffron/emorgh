const CalculatePageNumber = (currentPageNumber, direction) => {
  let pageNumber = currentPageNumber;
  if (direction === "Next" && currentPageNumber < 5) {
    pageNumber += 1;
  }

  if (direction === "Previous" && currentPageNumber > 1) {
    pageNumber -= 1;
  }

  return pageNumber;
};

export default CalculatePageNumber;
