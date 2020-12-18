import Grid from "@bbc/psammead-grid";
import Image from "@bbc/psammead-image";
import getGridGroups from "../../Helpers/GetGridGroups";
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
      startOffset={getGridGroups([2, 2, 2, 2, 2, 2])}
      columns={getGridGroups([8, 8, 8, 8, 8, 8])}
    >
      <StyledImage src={url} alt={alt} />
    </Grid>
  );
};
export default Photo;
