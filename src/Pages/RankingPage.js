import React from "react";
import getData from "../Helpers/FetchArticles";
import { latin } from "@bbc/gel-foundations/scripts";

import { Headline } from "@bbc/psammead-headings";
import {
  MostReadLink,
  MostReadRank,
  MostReadItemWrapper,
} from "@bbc/psammead-most-read";
import Grid from "@bbc/psammead-grid";

import { Rating } from "@material-ui/lab";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Link } from "@reach/router";

// Again - confusing component naming. Rate wut? It's a page where you rate articles.
const RankingPage = () => {
  // Can this be handled by a function that takes in a num and returns dynamic data based on it?
  const title1 = getData(1)[0].model.text;
  const title2 = getData(2)[0].model.text;
  const title3 = getData(3)[0].model.text;
  const title4 = getData(4)[0].model.text;
  const title5 = getData(5)[0].model.text;

  return (
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
        <Headline>Rank The Articles</Headline>
        {/* Each of these items should be its own component */}
        <MostReadItemWrapper dir="ltr" children columnLayout="twoColumn">
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
        </MostReadItemWrapper>
        <Rating size="large" />
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
        <Rating size="large" />

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
        <Rating size="large" />

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
        <Rating size="large" />

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
        <Rating size="large" />
        <div>
          <Link to={"/submitted"}>
            <button>Submit</button>
          </Link>
        </div>
      </Grid>
    </Grid>
  );
};
export default RankingPage;
