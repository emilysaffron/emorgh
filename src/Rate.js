import React from "react";
import getData from "./FetchArticles";
import { StoryPromoLi, StoryPromoUl } from "@bbc/psammead-story-promo-list";
import { Headline } from "@bbc/psammead-headings";

const Rate = ({ rate }) => {
  const title1 = getData(1)[0].model.text;
  const title2 = getData(2)[0].model.text;
  const title3 = getData(3)[0].model.text;
  const title4 = getData(4)[0].model.text;
  const title5 = getData(5)[0].model.text;

  return (
    <StoryPromoUl>
      <StoryPromoLi>
        <Headline>{title1}</Headline>
      </StoryPromoLi>
      <StoryPromoLi>
        <Headline>{title2}</Headline>
      </StoryPromoLi>
      <StoryPromoLi>
        <Headline>{title3}</Headline>
      </StoryPromoLi>
      <StoryPromoLi>
        <Headline>{title4}</Headline>
      </StoryPromoLi>
      <StoryPromoLi>
        <Headline>{title5}</Headline>
      </StoryPromoLi>
    </StoryPromoUl>
  );
};
export default Rate;
