const getData = (num) => {
  let data = "";

  let article = "";
  // This can be made much simpler - how can you pass num dynamically into the string? DONE

  data = require(`../data/article-${num}.json`);
  article = data.body;
  return article;
};

export default getData;
