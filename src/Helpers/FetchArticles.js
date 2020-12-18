const getData = (num) => {
  let data = "";

  let article = "";

  data = require(`../data/article-${num}.json`);
  article = data.body;
  return article;
};

export default getData;
