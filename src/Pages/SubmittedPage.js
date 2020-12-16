import React, { useState, useEffect } from "react";
import { SubHeading } from "@bbc/psammead-headings";
import Grid from "@bbc/psammead-grid";
import styled from "@emotion/styled";
import Loader from "react-loader-spinner";
import tick from "./tick.png";

const StyledImg = styled.img`
  margin-top: 300px;
`;
const StyledLoader = styled(Loader)`
  margin-top: 300px;
`;

// Component name - what does 'Submitted' mean? Is it a page?
const SubmittedPage = () => {
  const [loading, updateLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      updateLoading(false);
    }, 1000);
  }, []);

  // Can you write a getGridGroups helper to reduce the grid 'bulk' on each page?
  // const getGridGroups = ([group0, group1, group2, group3, group4, group5]) => {
  //   return {
  //     group0: group0,
  //     group1: group1,
  //     ..
  //     group5: group5
  //   };
  // };

  return loading ? (
    // This could be its own <Loading> component
    <Grid
      enableGelGutters
      columns={{
        // these values are, I think, different break points - experiment with that.
        group0: 7,
        group1: 7,
        group2: 7,
        group3: 7,
        group4: 7,
        group5: 7,
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
          group0: 4,
          group1: 4,
          group2: 4,
          group3: 4,
          group4: 4,
          group5: 4,
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
      columns={{
        group0: 7,
        group1: 7,
        group2: 7,
        group3: 7,
        group4: 7,
        group5: 7,
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
          group0: 4,
          group1: 4,
          group2: 4,
          group3: 4,
          group4: 4,
          group5: 4,
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
        <StyledImg src={tick} height="100px" width="100px" alt="tick" />
        <SubHeading>Submitted</SubHeading>
      </Grid>
    </Grid>
  );
};

export default SubmittedPage;
