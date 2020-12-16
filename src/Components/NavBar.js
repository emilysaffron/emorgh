import React  from "react";
import { Link } from "@reach/router";

import { ScrollableNavigation } from "@bbc/psammead-navigation/scrollable";
import Navigation, {
  NavigationUl,
  NavigationLi,
} from "@bbc/psammead-navigation";

import PageNav from "./PageNav";
function NavBar({ currentPageNumber, updatePage }) {
  const loadNextArticle = () => {
    if (currentPageNumber < 5) {
      updatePage(currentPageNumber + 1);
    }
  };

  const loadPreviousArticle = () => {
    if (currentPageNumber > 1) {
      updatePage(currentPageNumber - 1);
    }
  };

  return (
    <div className="Nav">
      <Navigation>
        <ScrollableNavigation>
          <NavigationUl>
            <Link to={"/"}>
              <NavigationLi>Home</NavigationLi>
            </Link>

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
