import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import TextBody from "./Paragraph";
import Photo from "./Image";
import BulletedList, { BulletedListItem } from "@bbc/psammead-bulleted-list";
import Grid from "@bbc/psammead-grid";
// Nest this within a 'helpers' folder as it isn't a visual component
import getData from "./FetchArticles";

// This component name :facepalm: - maybe 'ArticlePage', which returns an 'ArticleRenderer'? DONE
function ArticlePage({ num }) {
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
            return <Heading text={item.model.text} />;

          case "paragraph":
            // Render a Paragraph component ... same for Image, List etc below
            return <TextBody text={item.model.text} />;
          case "image":
            return <Photo url={item.model.url} alt={item.model.altText} />;

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

export default ArticlePage;
