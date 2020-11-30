import Data from "./Data";
import React, { useState } from "react";
import { CanonicalMenuButton } from "@bbc/psammead-navigation/dropdown";
import { ScrollableNavigation } from "@bbc/psammead-navigation/scrollable";
import Navigation, {
  NavigationUl,
  NavigationLi,
} from "@bbc/psammead-navigation";
function App() {
  const [pageNo, updatePage] = useState(1);

  const loadNextArticle = () => {
    if (pageNo < 5) {
      updatePage(pageNo + 1);
    }
  };

  const loadPreviousArticle = () => {
    if (pageNo > 1) {
      updatePage(pageNo - 1);
    }
  };
  return (
    <div className="App">
      <Navigation>
        <ScrollableNavigation>
          <NavigationUl>
            <NavigationLi onClick={loadNextArticle}>Next</NavigationLi>
            <NavigationLi onClick={loadPreviousArticle}>Previous</NavigationLi>
          </NavigationUl>
        </ScrollableNavigation>
      </Navigation>
      <Data num={pageNo} />
    </div>
  );
}

export default App;
