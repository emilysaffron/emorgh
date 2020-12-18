import BulletedList, { BulletedListItem } from "@bbc/psammead-bulleted-list";
import Grid from "@bbc/psammead-grid";
import getGridGroups from "../helpers/GetGridGroups";

const List = ({ items }) => {
  const list = items.map((listItem) => {
    return <BulletedListItem>{listItem}</BulletedListItem>;
  });

  return (
    <Grid
      item
      startOffset={getGridGroups([2, 2, 2, 2, 2, 2])}
      columns={getGridGroups([8, 8, 8, 8, 8, 8])}
    >
      <BulletedList>{list}</BulletedList>
    </Grid>
  );
};
export default List;
