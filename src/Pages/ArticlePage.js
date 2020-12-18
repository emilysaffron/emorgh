import React, { useState, useEffect } from "react";
import Grid from "@bbc/psammead-grid";
import getData from "../helpers/FetchArticles";
import ArticleRenderer from "../helpers/RenderArticle";
import getGridGroups from "../helpers/GetGridGroups";

function ArticlePage({ num }) {
  const [article, setArticle] = useState(false);

  useEffect(() => {
    setArticle(getData(num));
  }, [num]);

  return article ? (
    <Grid
      enableGelGutters
      columns={getGridGroups([8, 8, 8, 8, 8, 8])}
      margins={getGridGroups([true, true, true, true, true, true])}
    >
      <ArticleRenderer article={article} />
    </Grid>
  ) : (
    <div>loading ...</div>
  );
}

export default ArticlePage;
