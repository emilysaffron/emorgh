import React, { useState, useEffect } from "react";
import { Headline } from "@bbc/psammead-headings";
import Paragraph from "@bbc/psammead-paragraph";
import Image from "@bbc/psammead-image";
import BulletedList, { BulletedListItem } from "@bbc/psammead-bulleted-list";
import Figure from "@bbc/psammead-figure";
import styled from "@emotion/styled";
import getData from "./FetchArticles";

const StyledFigure = styled(Figure)`
  width: 500px;
  height: 500px;
`;
function Data({ num }) {
  const [article, setArticle] = useState("");

  useEffect(() => {
    setArticle(getData(num));
  }, [num]);

  return article ? (
    <div>
      {article.map((item) => {
        switch (item.type) {
          case "heading":
            return <Headline>{item.model.text}</Headline>;

          case "paragraph":
            return <Paragraph>{item.model.text}</Paragraph>;

          case "image":
            return (
              <StyledFigure>
                <Image src={item.model.url} alt={item.model.altText} />
              </StyledFigure>
            );

          case "list":
            let listLength = item.model.items.length;
            let list = [];
            for (let i = 0; i < listLength; i++) {
              list[i] = (
                <BulletedListItem>{item.model.items[i]}</BulletedListItem>
              );
            }

            return <BulletedList>{list}</BulletedList>;

          default:
            break;
        }
      })}
    </div>
  ) : (
    <div>loading ...</div>
  );
}

export default Data;
