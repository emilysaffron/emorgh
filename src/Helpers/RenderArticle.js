import Heading from "../components/Heading";
import TextBody from "../components/Paragraph";
import Photo from "../components/Image";
import List from "../components/List";

const renderArticle = ({ article }) => {
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
