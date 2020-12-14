import React, { useState, useEffect } from "react";
import { Headline } from "@bbc/psammead-headings";
import Paragraph from "@bbc/psammead-paragraph";
import Image from "@bbc/psammead-image";
import BulletedList, { BulletedListItem } from "@bbc/psammead-bulleted-list";
import Grid from "@bbc/psammead-grid";
import styled from "@emotion/styled";
// Nest this within a 'helpers' folder as it isn't a visual component
import getData from "./FetchArticles";

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 62.5%;
  max-height: 62.5%;
  padding-bottom: 1rem;
`;

// This component name :facepalm: - maybe 'ArticlePage', which returns an 'ArticleRenderer'?
function Data({ num }) {
  const [article, setArticle] = useState("");

  // Good to have the "data fetching" at this level - but thereafter it should just be passing that data down to another component,
  // which handles the actual rendering of the elements.
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
            // Render a Heading component
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
            // Render a Paragraph component ... same for Image, List etc below
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
                <Paragraph>{item.model.text}</Paragraph>
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
                <StyledImage src={item.model.url} alt={item.model.altText} />
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
