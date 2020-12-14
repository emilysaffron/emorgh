const getData = (num) => {
  let data = "";

  let article = "";
  // This can be made much simpler - how can you pass num dynamically into the string?
  switch (num) {
    case 1:
      data = require("./data/article-1.json");
      article = data.body;
      return article;

    case 2:
      data = require("./data/article-2.json");
      article = data.body;
      return article;

    case 3:
      data = require("./data/article-3.json");
      article = data.body;
      return article;

    case 4:
      data = require("./data/article-4.json");
      article = data.body;
      return article;

    case 5:
      data = require("./data/article-5.json");
      article = data.body;
      return article;

    default:
      console.log("here1");
      break;
  }
};

export default getData;
