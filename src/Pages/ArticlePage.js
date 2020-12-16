import React, { useState, useEffect } from "react";
import Grid from "@bbc/psammead-grid";
import getData from "../Helpers/FetchArticles";
import renderArticle from "../Helpers/RenderArticle";
import getGridGroups from "../Helpers/GetGridGroups";

function ArticlePage({ num }) {
  const [article, setArticle] = useState("");

  useEffect(() => {
    setArticle(getData(num));
  }, [num]);

  return article ? (
    <Grid
      enableGelGutters
      columns={getGridGroups([8, 8, 8, 8, 8, 8])}
      margins={getGridGroups([true, true, true, true, true, true])}
    >
      {renderArticle(article)}
    </Grid>
  ) : (
    <div>loading ...</div>
  );
}

export default ArticlePage;
