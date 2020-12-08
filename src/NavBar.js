import Data from "./Data";
import React, { useState } from "react";
import Home from "./Home";
import { Router, Link } from "@reach/router";

import { ScrollableNavigation } from "@bbc/psammead-navigation/scrollable";
import Navigation, {
  NavigationUl,
  NavigationLi,
} from "@bbc/psammead-navigation";

import Rate from "./Rate";
import Submitted from "./Submitted";

function NavBar() {
  const [pageNo, updatePage] = useState(0);
  const [rate, updateRate] = useState(false);
  const loadNextArticle = () => {
    if (pageNo < 5) {
      updatePage(pageNo + 1);
    }
  };

  const loadPreviousArticle = () => {
    if (pageNo > 1 && rate === false) {
      updatePage(pageNo - 1);
    }
    updateRate(false);
  };

  const toggleRate = () => {
    updateRate(true);
  };

  return (
    <div className="Nav">
      <Navigation>
        <ScrollableNavigation>
          <NavigationUl>
            <Link to={"/"}>
              <NavigationLi>Home</NavigationLi>
            </Link>
            <Link to={"/article"}>
              <NavigationLi onClick={loadNextArticle}>Next</NavigationLi>

              <NavigationLi onClick={loadPreviousArticle}>
                Previous
              </NavigationLi>
            </Link>
            <Link to={"/rate"} onClick={toggleRate}>
              <NavigationLi>Rate the Articles</NavigationLi>
            </Link>
          </NavigationUl>
        </ScrollableNavigation>
      </Navigation>

      <Router>
        <Data exact path={"/article"} num={pageNo} />
      </Router>
      <Router>
        <Rate exact path={"/rate"} rate={rate} />
      </Router>

      <Router>
        <Home exact path={"/"} />
      </Router>
      <Router>
        <Submitted exact path={"/submitted"} rate={rate} />
      </Router>
    </div>
  );
}

export default NavBar;
