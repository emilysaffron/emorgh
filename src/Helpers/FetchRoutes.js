import { Router, Redirect } from "@reach/router";
import RankingPage from "../pages/RankingPage";
import SubmittedPage from "../pages/SubmittedPage";
import ArticlePage from "../pages/ArticlePage";
const createRoutes = ({ currentPageNumber }) => {
  return (
    <div>
      <Router>
        <RankingPage exact path={"/rate"} />
      </Router>

      <Router>
        <SubmittedPage exact path={"/submitted"} />
      </Router>

      <Router>
        <ArticlePage
          exact
          path={`/article${currentPageNumber}`}
          num={currentPageNumber}
        />
      </Router>

      <Router>
        <Redirect noThrow from="/" to={`/article${currentPageNumber}`} />
      </Router>
    </div>
  );
};

export default createRoutes;
