import React from "react";

import { Headline } from "@bbc/psammead-headings";

import Grid from "@bbc/psammead-grid";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Link } from "@reach/router";
import RankableItem from "../Components/RankableItem";
import getGridGroups from "../Helpers/GetGridGroups";

const RankingPage = () => {
  return (
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
