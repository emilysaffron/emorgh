import React, { useState, useEffect } from "react";
import { SubHeading } from "@bbc/psammead-headings";
import Grid from "@bbc/psammead-grid";
import getGridGroups from "../Helpers/GetGridGroups";
import styled from "@emotion/styled";
import Loader from "react-loader-spinner";
import tick from "./tick.png";

const StyledImg = styled.img`
  margin-top: 300px;
`;
const StyledLoader = styled(Loader)`
  margin-top: 300px;
`;

const SubmittedPage = () => {
  const [loading, updateLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      updateLoading(false);
    }, 1000);
  }, []);

  return loading ? (
    // This could be its own <Loading> component
    <Grid
      enableGelGutters
      columns={getGridGroups([7, 7, 7, 7, 7, 7])}
      margins={getGridGroups([true, true, true, true, true, true])}
    >
      <Grid
        item
        startOffset={getGridGroups([4, 4, 4, 4, 4, 4])}
        columns={getGridGroups([8, 8, 8, 8, 8, 8])}
      >
        <StyledLoader
          type="ThreeDots"
          color="lightgray"
          height={80}
          width={80}
        />
      </Grid>
    </Grid>
  ) : (
    <Grid
      enableGelGutters
      columns={getGridGroups([7, 7, 7, 7, 7, 7])}
      margins={getGridGroups([true, true, true, true, true, true])}
    >
      <Grid
        item
        startOffset={getGridGroups([4, 4, 4, 4, 4, 4])}
        columns={getGridGroups([8, 8, 8, 8, 8, 8])}
      >
        <StyledImg src={tick} height="100px" width="100px" alt="tick" />
        <SubHeading>Submitted</SubHeading>
      </Grid>
    </Grid>
  );
};

export default SubmittedPage;
