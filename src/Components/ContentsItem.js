import {
  MostReadLink,
  MostReadRank,
  MostReadItemWrapper,
} from "@bbc/psammead-most-read";
import fetchTitle from "../Helpers/FetchTitle";
import { latin } from "@bbc/gel-foundations/scripts";

const ContentsItem = ({ index }) => {
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
    </div>
  );
};
export default ContentsItem;
