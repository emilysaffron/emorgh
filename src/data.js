import React, { useState, useEffect } from "react";

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
    <div className="Data">{article[0].model.text}</div>
  ) : (
    <div>loading ...</div>
  );
}

export default Data;
