import Grid from "@bbc/psammead-grid";
import { Headline } from "@bbc/psammead-headings";
import getGridGroups from "../helpers/GetGridGroups";

const Heading = ({ text }) => {
  return (
    <Grid
      item
      startOffset={getGridGroups([2, 2, 2, 2, 2, 2])}
      columns={getGridGroups([8, 8, 8, 8, 8, 8])}
    >
      <Headline>{text}</Headline>
    </Grid>
  );
};

export default Heading;
