import ArticlePage from "../Pages/ArticlePage";
import React, { useState } from "react";
import Home from "../Pages/Home";
import { Router, Link } from "@reach/router";

import { ScrollableNavigation } from "@bbc/psammead-navigation/scrollable";
import Navigation, {
  NavigationUl,
  NavigationLi,
} from "@bbc/psammead-navigation";

import Rate from "../Pages/Rate";
import Submitted from "../Pages/Submitted";

function NavBar() {
  // Maybe be more explicit here that pageNo is 'currentPageNumber'
  // no === 'number'
  // number === 'number'   DONE

  const [currentPageNumber, updatePage] = useState(0);

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
            {/* Next/Previous links - can this be improved by passing a single 'PageNav' component some props? */}
            {/* Can the currentPageNumber calc be handled in its own function to remove the ternary here? */}
            {currentPageNumber < 5 ? (
              <Link to={`/article${currentPageNumber + 1}`}>
                <NavigationLi onClick={loadNextArticle}>Next</NavigationLi>
              </Link>
            ) : (
              <Link to={`/article${currentPageNumber}`}>
                <NavigationLi onClick={loadNextArticle}>Next</NavigationLi>
              </Link>
            )}
            {currentPageNumber > 1 ? (
              <Link to={`/article${currentPageNumber - 1}`}>
                <NavigationLi onClick={loadPreviousArticle}>
                  Previous
                </NavigationLi>
              </Link>
            ) : (
              <Link to={`/article${currentPageNumber}`}>
                <NavigationLi onClick={loadPreviousArticle}>
                  Previous
                </NavigationLi>
              </Link>
            )}

            <Link to={"/rate"}>
              <NavigationLi>Rate the Articles</NavigationLi>
            </Link>
          </NavigationUl>
        </ScrollableNavigation>
      </Navigation>

      {/* These are not part of the nav bar- they should be within App. Also - what about creating a separate 'Pages' 
      folder that holds each of these page-level components below, to distinguish them from components */}
      <Router>
        <ArticlePage
          exact
          path={`/article${currentPageNumber}`}
          num={currentPageNumber}
        />
      </Router>
      <Router>
        <Rate exact path={"/rate"} />
      </Router>

      <Router>
        <Home exact path={"/"} />
      </Router>
      <Router>
        <Submitted exact path={"/submitted"} />
      </Router>
    </div>
  );
}

export default NavBar;
