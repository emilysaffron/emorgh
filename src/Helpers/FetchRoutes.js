import { Router } from "@reach/router";
import Rate from "../Pages/Rate";
import Home from "../Pages/Home";
import Submitted from "../Pages/Submitted";
import ArticlePage from "../Pages/ArticlePage";
const createRoutes = (currentPageNumber) => {
  return (
    <div>
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
};

export default createRoutes;
