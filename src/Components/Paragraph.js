import Grid from "@bbc/psammead-grid";
import Paragraph from "@bbc/psammead-paragraph";

const TextBody = ({ text }) => {
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
        group0: 5,
        group1: 5,
        group2: 5,
        group3: 5,
        group4: 5,
        group5: 5,
      }}
    >
      <Paragraph>{text}</Paragraph>
    </Grid>
  );
};
export default TextBody;
