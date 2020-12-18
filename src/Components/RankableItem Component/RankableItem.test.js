import RankableItem from "./RankableItem";
import renderer from "react-test-renderer";

it("RankableItem Snapshot", () => {
  const tree = renderer.create(<RankableItem index="1" />).toJSON();
  expect(tree).toMatchSnapshot();
});
