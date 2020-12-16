import React from "react";
import { latin } from "@bbc/gel-foundations/scripts";
import fetchTitle from "../Helpers/FetchTitle";
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

const RankingPage = () => {
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
            title={fetchTitle(1)}
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
            title={fetchTitle(2)}
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
            title={fetchTitle(3)}
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
            title={fetchTitle(4)}
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
            title={fetchTitle(5)}
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
