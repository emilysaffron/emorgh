import { Headline, SubHeading } from "@bbc/psammead-headings";
import Grid from "@bbc/psammead-grid";

const Home = () => {
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
        <Headline>Article Rater</Headline>

        <SubHeading>Read and Rate the Following Articles</SubHeading>
        {/* :blob-excited: */}
      </Grid>
    </Grid>
  );
};

export default Home;
