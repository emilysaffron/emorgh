import Heading from "../Components/Heading";
import TextBody from "../Components/Paragraph";
import Photo from "../Components/Image";
import List from "../Components/List";
const renderArticle = (article) => {
  return article.map((item) => {
    switch (item.type) {
      case "heading":
        return <Heading text={item.model.text} />;

      case "paragraph":
        return <TextBody text={item.model.text} />;
      case "image":
        return <Photo url={item.model.url} alt={item.model.altText} />;

      case "list":
        return <List items={item.model.items} />;

      default:
        break;
    }
  });
};

export default renderArticle;
