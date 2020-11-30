import React, { useState, useEffect } from "react";
import { Headline } from "@bbc/psammead-headings";
import Paragraph from "@bbc/psammead-paragraph";
function Data() {
  const [article, setArticle] = useState("");
  const getData = () => {
    const data = require("./data/article-1.json");
    setArticle(data.body);
  };
  useEffect(() => {
    getData();
  }, []);

  return article ? (
    <div>
      {article.map((item) =>
        item.type === "heading" ? (
          <Headline>{item.model.text}</Headline>
        ) : (
          <Paragraph>{item.model.text}</Paragraph>
        )
      )}
    </div>
  ) : (
    <div>loading ...</div>
  );
}

export default Data;
