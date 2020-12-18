import Paragraph from "./Paragraph";
import renderer from "react-test-renderer";

it("Paragraph Snapshot", () => {
  const tree = renderer.create(<Paragraph />).toJSON();
  expect(tree).toMatchSnapshot();
});
;
