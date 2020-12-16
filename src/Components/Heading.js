import Grid from "@bbc/psammead-grid";
import { Headline } from "@bbc/psammead-headings";

const Heading = ({ text }) => {
  return (
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
      <Headline>{text}</Headline>
    </Grid>
  );
};

export default Heading;