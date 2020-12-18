import CalculatePageNumber from "../helpers/CalculatePageNumber";
import { Link } from "@reach/router";
import { NavigationLi } from "@bbc/psammead-navigation";
const PageNav = ({ currentPageNumber, onClick, direction }) => {
  const pageNumber = CalculatePageNumber(currentPageNumber, direction);

  return (
    <Link to={`/article${pageNumber}`}>
      <NavigationLi onClick={onClick}>{direction}</NavigationLi>
    </Link>
  );
};

export default PageNav;
