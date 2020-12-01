import React from "react";
import getData from "./FetchArticles";
import { latin } from "@bbc/gel-foundations/scripts";
import { StoryPromoLi, StoryPromoUl } from "@bbc/psammead-story-promo-list";
import { Headline } from "@bbc/psammead-headings";
import {
  MostReadList,
  MostReadLink,
  MostReadRank,
  MostReadItemWrapper,
} from "@bbc/psammead-most-read";

import styled from "@emotion/styled";

const StyledMostRead = styled(MostReadList)`
  display: block;
`;
const Rate = ({ rate }) => {
  const title1 = getData(1)[0].model.text;
  const title2 = getData(2)[0].model.text;
  const title3 = getData(3)[0].model.text;
  const title4 = getData(4)[0].model.text;
  const title5 = getData(5)[0].model.text;

  return (
    <div>
      <MostReadItemWrapper dir="ltr" children columnLayout="twoColumn">
        <MostReadRank
          service="news"
          script={latin}
          listIndex={1}
          numberOfItems={1}
          dir="ltr"
          columnLayout="twoColumn"
          size="small"
        />
        <MostReadLink
          dir="ltr"
          href="/bbc.co.uk/news/articles/27051997"
          service="news"
          script={latin}
          title={title1}
        />
      </MostReadItemWrapper>
      <MostReadItemWrapper dir="ltr" children columnLayout="twoColumn">
        <MostReadRank
          service="news"
          script={latin}
          listIndex={2}
          numberOfItems={1}
          dir="ltr"
          columnLayout="twoColumn"
          size="small"
        />
        <MostReadLink
          dir="ltr"
          href="/bbc.co.uk/news/articles/27051997"
          service="news"
          script={latin}
          title={title2}
        />
      </MostReadItemWrapper>
      <MostReadItemWrapper dir="ltr" children columnLayout="twoColumn">
        <MostReadRank
          service="news"
          script={latin}
          listIndex={3}
          numberOfItems={1}
          dir="ltr"
          columnLayout="twoColumn"
          size="small"
        />
        <MostReadLink
          dir="ltr"
          href="/bbc.co.uk/news/articles/27051997"
          service="news"
          script={latin}
          title={title3}
        />
      </MostReadItemWrapper>
      <MostReadItemWrapper dir="ltr" children columnLayout="twoColumn">
        <MostReadRank
          service="news"
          script={latin}
          listIndex={4}
          numberOfItems={1}
          dir="ltr"
          columnLayout="twoColumn"
          size="small"
        />
        <MostReadLink
          dir="ltr"
          href="/bbc.co.uk/news/articles/27051997"
          service="news"
          script={latin}
          title={title4}
        />
      </MostReadItemWrapper>
      <MostReadItemWrapper dir="ltr" children columnLayout="twoColumn">
        <MostReadRank
          service="news"
          script={latin}
          listIndex={5}
          numberOfItems={1}
          dir="ltr"
          columnLayout="twoColumn"
          size="small"
        />
        <MostReadLink
          dir="ltr"
          href="/bbc.co.uk/news/articles/27051997"
          service="news"
          script={latin}
          title={title5}
        />
      </MostReadItemWrapper>
    </div>
  );
};
export default Rate;
