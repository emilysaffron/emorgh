import React from "react";

import { Headline } from "@bbc/psammead-headings";

import Grid from "@bbc/psammead-grid";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Link } from "@reach/router";
import RankableItem from "../Components/RankableItem";

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

        <RankableItem index={1} />
        <RankableItem index={2} />
        <RankableItem index={3} />
        <RankableItem index={4} />
        <RankableItem index={5} />
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
