import getGridGroups from "../../Helpers/GetGridGroups";
import Grid from "@bbc/psammead-grid";
import styled from "@emotion/styled";
import Loader from "react-loader-spinner";
const StyledLoader = styled(Loader)`
  margin-top: 300px;
`;

const Loading = () => {
  return (
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
  );
};

export default Loading;
