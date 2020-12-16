import { Headline, SubHeading } from "@bbc/psammead-headings";
import Grid from "@bbc/psammead-grid";
import ContentsItem from "../Components/ContentsItem";
import { Router } from "@reach/router";
import ArticlePage from "./ArticlePage";

const Home = () => {
  return (
    <div>
      <Grid
        enableGelGutters
        columns={{
          group0: 8,
          group1: 8,
          group2: 8,
          group3: 8,
          group4: 8,
          group5: 8,
        }}
        margins={{
          group0: true,
          group1: true,
          group2: true,
          group3: true,
          group4: true,
          group5: true,
        }}
      >
        <Grid
          item
          startOffset={{
            group0: 2,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 2,
            group5: 2,
          }}
          columns={{
            group0: 8,
            group1: 8,
            group2: 8,
            group3: 8,
            group4: 8,
            group5: 8,
          }}
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
