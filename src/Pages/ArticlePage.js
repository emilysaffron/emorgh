import React, { useState, useEffect } from "react";
import Grid from "@bbc/psammead-grid";
import getData from "../Helpers/FetchArticles";
import renderArticle from "../Helpers/RenderArticle";
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
      {renderArticle(article)}
    </Grid>
  ) : (
    <div>loading ...</div>
  );
}

export default ArticlePage;
