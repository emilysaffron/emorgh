import Grid from "@bbc/psammead-grid";
import Paragraph from "@bbc/psammead-paragraph";
import Image from "@bbc/psammead-image";

import styled from "@emotion/styled";

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 62.5%;
  max-height: 62.5%;
  padding-bottom: 1rem;
`;

const Photo = ({ alt, url }) => {
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
      <StyledImage src={url} alt={alt} />
    </Grid>
  );
};
export default Photo;
