import Grid from "@bbc/psammead-grid";
import Paragraph from "@bbc/psammead-paragraph";
import getGridGroups from "../../Helpers/GetGridGroups";

const TextBody = ({ text }) => {
  return (
    <Grid
      item
      startOffset={getGridGroups([2, 2, 2, 2, 2, 2])}
      columns={getGridGroups([5, 5, 5, 5, 5, 5])}
    >
      <Paragraph>{text}</Paragraph>
    </Grid>
  );
};
export default TextBody;
