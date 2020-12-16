import BulletedList, { BulletedListItem } from "@bbc/psammead-bulleted-list";
import Grid from "@bbc/psammead-grid";
import getGridGroups from "../Helpers/GetGridGroups";

const List = ({ items }) => {
  let listLength = items.length;
  let list = [];
  for (let i = 0; i < listLength; i++) {
    list[i] = <BulletedListItem>{items[i]}</BulletedListItem>;
  }

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
