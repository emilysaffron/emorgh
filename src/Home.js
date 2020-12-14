import { Headline, SubHeading } from "@bbc/psammead-headings";
import Grid from "@bbc/psammead-grid";
import {
  MostReadLink,
  MostReadRank,
  MostReadItemWrapper,
} from "@bbc/psammead-most-read";
import { latin } from "@bbc/gel-foundations/scripts";
import getData from "./FetchArticles";
import { Link, Router } from "@reach/router";
import Data from "./Data";
const Home = () => {
  const title1 = getData(1)[0].model.text;
  const title2 = getData(2)[0].model.text;
  const title3 = getData(3)[0].model.text;
  const title4 = getData(4)[0].model.text;
  const title5 = getData(5)[0].model.text;
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

          <MostReadItemWrapper dir="ltr" children columnLayout="twoColumn">
            <Link to={`/article`}>
              <MostReadRank
                service="news"
                script={latin}
                listIndex={1}
                numberOfItems={1}
                dir="ltr"
                columnLayout="twoColumn"
                size="small"
              />

              <MostReadLink
                dir="ltr"
                service="news"
                script={latin}
                title={title1}
              />
            </Link>
          </MostReadItemWrapper>

          <MostReadItemWrapper dir="ltr" children columnLayout="twoColumn">
            <MostReadRank
              service="news"
              script={latin}
              listIndex={2}
              numberOfItems={1}
              dir="ltr"
              columnLayout="twoColumn"
              size="small"
            />
            <MostReadLink
              dir="ltr"
              service="news"
              script={latin}
              title={title2}
            />
          </MostReadItemWrapper>

          <MostReadItemWrapper dir="ltr" children columnLayout="twoColumn">
            <MostReadRank
              service="news"
              script={latin}
              listIndex={3}
              numberOfItems={1}
              dir="ltr"
              columnLayout="twoColumn"
              size="small"
            />
            <MostReadLink
              dir="ltr"
              service="news"
              script={latin}
              title={title3}
            />
          </MostReadItemWrapper>

          <MostReadItemWrapper dir="ltr" children columnLayout="twoColumn">
            <MostReadRank
              service="news"
              script={latin}
              listIndex={4}
              numberOfItems={1}
              dir="ltr"
              columnLayout="twoColumn"
              size="small"
            />
            <MostReadLink
              dir="ltr"
              service="news"
              script={latin}
              title={title4}
            />
          </MostReadItemWrapper>

          <MostReadItemWrapper dir="ltr" children columnLayout="twoColumn">
            <MostReadRank
              service="news"
              script={latin}
              listIndex={5}
              numberOfItems={1}
              dir="ltr"
              columnLayout="twoColumn"
              size="small"
            />
            <MostReadLink
              dir="ltr"
              service="news"
              script={latin}
              title={title5}
            />
          </MostReadItemWrapper>
        </Grid>
        <SubHeading>Read and Rate the Following Articles</SubHeading>
        {/* :blob-excited: */}
      </Grid>
      <Router>
        <Data exact path="/article" num={1} />
      </Router>
    </div>
  );
};

export default Home;
