import BulletedList, { BulletedListItem } from "@bbc/psammead-bulleted-list";
import Grid from "@bbc/psammead-grid";

const List = ({ items }) => {
  let listLength = items.length;
  let list = [];
  for (let i = 0; i < listLength; i++) {
    list[i] = <BulletedListItem>{items[i]}</BulletedListItem>;
  }

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
      <BulletedList>{list}</BulletedList>
    </Grid>
  );
};
export default List;
