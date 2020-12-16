import getData from "../Helpers/FetchArticles";

const fetchTitle = (num) => {
  const title = getData(num)[0].model.text;
  return title;
};

export default fetchTitle;
