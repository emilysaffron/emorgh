import PageNav from "./PageNav";
import renderer from "react-test-renderer";

it("PageNav Snapshot", () => {
  const tree = renderer.create(<PageNav />).toJSON();
  expect(tree).toMatchSnapshot();
});
