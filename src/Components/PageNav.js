import { useState } from "react";
import { Link } from "@reach/router";
import { NavigationLi } from "@bbc/psammead-navigation";
const PageNav = ({ currentPageNumber, onClick, direction }) => {
  let pageNumber = currentPageNumber;
  if (direction === "Next" && currentPageNumber < 5) {
    pageNumber += 1;
  }

  if (direction === "Previous" && currentPageNumber > 1) {
    pageNumber -= 1;
  }

  return (
    <Link to={`/article${pageNumber}`}>
      <NavigationLi onClick={onClick}>{direction}</NavigationLi>
    </Link>
  );
};

export default PageNav;
