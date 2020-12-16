import { Headline, SubHeading } from "@bbc/psammead-headings";
import Grid from "@bbc/psammead-grid";
import ContentsItem from "../Components/ContentsItem";
import { Router } from "@reach/router";
import ArticlePage from "./ArticlePage";
import getGridGroups from "../Helpers/GetGridGroups";

const Home = () => {
  return (
    <div>
      <Grid
        enableGelGutters
        columns={getGridGroups([8, 8, 8, 8, 8, 8])}
        margins={getGridGroups([true, true, true, true, true, true])}
      >
        <Grid
          item
          startOffset={getGridGroups([2, 2, 2, 2, 2, 2])}
          columns={getGridGroups([8, 8, 8, 8, 8, 8])}
        >
          <Headline>Article Rater</Headline>

          <SubHeading>Read and Rate the Following Articles</SubHeading>

          <ContentsItem index={1} />
          <ContentsItem index={2} />
          <ContentsItem index={3} />
          <ContentsItem index={4} />
          <ContentsItem index={5} />
        </Grid>
      </Grid>
      <Router>
        <ArticlePage exact path="/article" num={1} />
      </Router>
    </div>
  );
};

export default Home;
