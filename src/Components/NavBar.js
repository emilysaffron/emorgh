import React from "react";
import { Link } from "@reach/router";
import { ScrollableNavigation } from "@bbc/psammead-navigation/scrollable";
import Navigation, {
  NavigationUl,
  NavigationLi,
} from "@bbc/psammead-navigation";

import PageNav from "./PageNav";

function NavBar({ currentPageNumber, updatePage }) {
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

  const loadNextArticle = () => {
    navigatePages(currentPageNumber, "next", updatePage);
  };

  const loadPreviousArticle = () => {
    navigatePages(currentPageNumber, "previous", updatePage);
  };

  return (
    <div className="Nav">
      <Navigation>
        <ScrollableNavigation>
          <NavigationUl>
            <PageNav
              currentPageNumber={currentPageNumber}
              onClick={loadPreviousArticle}
              direction="Previous"
            />

            <PageNav
              currentPageNumber={currentPageNumber}
              onClick={loadNextArticle}
              direction="Next"
            />

            <Link to={"/rate"}>
              <NavigationLi>Rate the Articles</NavigationLi>
            </Link>
          </NavigationUl>
        </ScrollableNavigation>
      </Navigation>
    </div>
  );
}

export default NavBar;
