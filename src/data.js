import React, { useState, useEffect } from "react";
import { Headline } from "@bbc/psammead-headings";
import Paragraph from "@bbc/psammead-paragraph";
import Image from "@bbc/psammead-image";
import BulletedList, { BulletedListItem } from "@bbc/psammead-bulleted-list";

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
      {article.map((item) => {
        switch (item.type) {
          case "heading":
            return <Headline>{item.model.text}</Headline>;

          case "paragraph":
            return <Paragraph>{item.model.text}</Paragraph>;

          case "image":
            return <Image src={item.model.url} alt={item.model.altText} />;

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
