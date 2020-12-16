import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import { Router } from "@reach/router";
import Rate from "./Pages/Rate";
import Home from "./Pages/Home";
import Submitted from "./Pages/Submitted";
import ArticlePage from "./Pages/ArticlePage";

function App() {
  const [currentPageNumber, updatePage] = useState(0);

  return (
    <div className="App">
      <NavBar currentPageNumber={currentPageNumber} updatePage={updatePage} />
      {/* If adding routes here - can they be their own component? */}
      <Router>
        <Rate exact path={"/rate"} />
      </Router>
      <Router>
        <Home exact path={"/"} />
      </Router>
      <Router>
        <Submitted exact path={"/submitted"} />
      </Router>

      <Router>
        <ArticlePage
          exact
          path={`/article${currentPageNumber}`}
          num={currentPageNumber}
        />
      </Router>
    </div>
  );
}

export default App;
