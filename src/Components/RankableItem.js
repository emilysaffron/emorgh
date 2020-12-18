import {
  MostReadLink,
  MostReadRank,
  MostReadItemWrapper,
} from "@bbc/psammead-most-read";
import { latin } from "@bbc/gel-foundations/scripts";
import { Rating } from "@material-ui/lab";
import getData from "../helpers/FetchArticles";

const RankableItem = ({ index }) => {
  const fetchTitle = (num) => {
    const title = getData(num)[0].model.text;
    return title;
  };

  return (
    <div>
      {" "}
      <MostReadItemWrapper dir="ltr" children columnLayout="twoColumn">
        <MostReadRank
          service="news"
          script={latin}
          listIndex={index}
          numberOfItems={1}
          dir="ltr"
          columnLayout="twoColumn"
          size="small"
        />
        <MostReadLink
          dir="ltr"
          service="news"
          script={latin}
          title={fetchTitle(index)}
        />
      </MostReadItemWrapper>
      <Rating size="large" />
    </div>
  );
};
export default RankableItem;
