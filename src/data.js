import React, { useState, useEffect } from "react";
import { Headline } from "@bbc/psammead-headings";
import Paragraph from "@bbc/psammead-paragraph";
import Image from "@bbc/psammead-image";
import BulletedList, { BulletedListItem } from "@bbc/psammead-bulleted-list";
import Figure from "@bbc/psammead-figure";
import Grid from "@bbc/psammead-grid";
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
    <Grid
      enableGelGutters
      columns={{
        group0: 8,
        group1: 8,
        group2: 8,
        group3: 8,
        group4: 8,
        group5: 8,
      }}
      margins={{
        group0: true,
        group1: true,
        group2: true,
        group3: true,
        group4: true,
        group5: true,
      }}
    >
      {article.map((item) => {
        switch (item.type) {
          case "heading":
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
                <Headline>{item.model.text}</Headline>
              </Grid>
            );

          case "paragraph":
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
                  group0: 5,
                  group1: 5,
                  group2: 5,
                  group3: 5,
                  group4: 5,
                  group5: 5,
                }}
              >
                <Paragraph>{item.model.text}</Paragraph>;
              </Grid>
            );
          case "image":
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
                <StyledFigure>
                  <Image src={item.model.url} alt={item.model.altText} />
                </StyledFigure>
              </Grid>
            );

          case "list":
            let listLength = item.model.items.length;
            let list = [];
            for (let i = 0; i < listLength; i++) {
              list[i] = (
                <BulletedListItem>{item.model.items[i]}</BulletedListItem>
              );
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

          default:
            break;
        }
      })}
    </Grid>
  ) : (
    <div>loading ...</div>
  );
}

export default Data;
