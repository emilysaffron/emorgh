import React, { useState, useEffect } from "react";
import { Headline } from "@bbc/psammead-headings";
import Paragraph from "@bbc/psammead-paragraph";
function Data({ num }) {
  const [article, setArticle] = useState("");
  let data = "";
  const getData = () => {
    switch (num) {
      case 1:
        data = require("./data/article-1.json");
        break;
      case 2:
        data = require("./data/article-2.json");
        break;
      case 3:
        data = require("./data/article-3.json");
        break;
      case 4:
        data = require("./data/article-4.json");
        break;
      case 5:
        data = require("./data/article-5.json");
        break;
      default:
        break;
    }

    setArticle(data.body);
  };
  useEffect(() => {
    getData();
  }, [num]);

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
