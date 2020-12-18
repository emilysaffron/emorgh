import Loading from "./Loading";
import renderer from "react-test-renderer";

it("Loading Snapshot", () => {
  const tree = renderer.create(<Loading />).toJSON();
  expect(tree).toMatchSnapshot();
});
