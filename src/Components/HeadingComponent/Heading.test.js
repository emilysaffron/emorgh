import renderer from "react-test-renderer";
import Heading from "./Heading";

it("Heading Snapshot", () => {
  const tree = renderer.create(<Heading text="text" />).toJSON();
  expect(tree).toMatchSnapshot();
});
